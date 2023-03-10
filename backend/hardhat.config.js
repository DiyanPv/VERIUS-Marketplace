require("@nomiclabs/hardhat-waffle");
require(`dotenv`).config();
const GOERLI_URL = process.env.ALCHEMY_GOERLI_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
