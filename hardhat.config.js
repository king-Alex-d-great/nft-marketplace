require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config();
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

const { PROJECT_ID, WALLET_PRIVATE_KEY } = process.env;
console.log({ PROJECT_ID, WALLET_PRIVATE_KEY });
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [WALLET_PRIVATE_KEY],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [WALLET_PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",
};
