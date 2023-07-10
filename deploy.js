const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Compile the contract
  const contractPath = "./contracts/ContentContract.sol";
  const contractSource = fs.readFileSync(contractPath, "utf8");
  const ContentContract = await ethers.getContractFactory("ContentContract", contractSource);

  // Deploy the contract
  const contentContract = await ContentContract.deploy();
  await contentContract.deployed();

  console.log("ContentContract deployed to:", contentContract.address);

  // Save the contract address to a file
  saveContractAddress(contentContract.address);
}

function saveContractAddress(address) {
  const networkName = process.env.HARDHAT_NETWORK || "localhost";
  const filePath = `./deployments/${networkName}.json`;

  // Create deployments folder if it doesn't exist
  if (!fs.existsSync("./deployments")) {
    fs.mkdirSync("./deployments");
  }

  const deploymentData = { address };
  fs.writeFileSync(filePath, JSON.stringify(deploymentData, null, 2));
  console.log(`Contract address saved to ${filePath}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
