const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (_, { ethers }) => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  solidity: "0.8.0",
};

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {
//       chainId: 1337, // Replace with the desired chain ID
//       accounts: {
//         mnemonic: "test test test test test test test test test test test junk", // Use the default Hardhat mnemonic
//       },
//     },
//   },
// };
