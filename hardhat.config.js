require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config({ path: ".env" });

const XINFIN_NETWORK_URL = process.env.XINFIN_NETWORK_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const APOTHEM_NETWORK_URL = process.env.APOTHEM_NETWORK_URL;

neondevnet: {
  url: "https://devnet.neonevm.org",
  accounts: [Array_of_accounts_private_keys],
  chainId: 245022926,
  allowUnlimitedContractSize: false,
  gas: "auto",
  gasPrice: "auto",
  isFork: true,
},

etherscan: {
  apiKey: {
    neonevm: "test"
  },
  customChains: [
    {
      network: "neonevm",
      chainId: 245022926,
      urls: {
        apiURL: "https://devnet-api.neonscan.org/hardhat/verify",
        browserURL: "https://devnet.neonscan.org"
      }
    }
  ]
}

module.exports = {
  solidity: "0.5.16",
  networks: {
    xinfin: {
      url: XINFIN_NETWORK_URL,
      accounts: [PRIVATE_KEY],
    },
    apothem: {
      url: APOTHEM_NETWORK_URL,
      accounts: [PRIVATE_KEY],
    }
  },
};