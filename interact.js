// const { ethers } = require("hardhat");
// const fs = require("fs");

// async function main() {
//   // Load the contract ABI
//   const jsonData = fs.readFileSync(
//     "/Users/surbhisharma/blockchainProject/artifacts/contracts/ContentContract.sol/ContentContract.json"
//   );
//   const contractData = JSON.parse(jsonData);
//   // Extract the contract ABI
//   const abi = contractData.abi;
//   // // Extract the contract ABI
//   // const abi = contractData.abi;
//   //   const contractAbi = JSON.parse(
//   //     fs.readFileSync(
//   //       "/Users/surbhisharma/blockchainProject/artifacts/contracts/ContentContract.sol/ContentContract.json"
//   //     )
//   //   );

//   // Connect to the Ethereum network
//   const provider = new ethers.providers.JsonRpcProvider(
//     "http://127.0.0.1:8545"
//   ); // Replace with your actual network URL

//   // Deployed contract address
//   const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Use the actual deployed contract address here
//   // Create a signer using the first Ethereum address from the local network
//   const accounts = await ethers.provider.listAccounts();
//   const signer = provider.getSigner(accounts[0]);
//   // Create an instance of the contract
//   const contract = new ethers.Contract(contractAddress, abi, signer);

//   // Interact with the contract
//   const contentTitle = "My Content";
//   const contentDescription = "Description of my content";
//   const contentPrice = 100;

//   // Create content
//   // Create content
//   const createContentTx = await contract.createContent(
//     contentTitle,
//     contentDescription,
//     contentPrice
//   );
//   await createContentTx.wait();
//   console.log("Content created successfully.");
//   //   await contract.createContent(contentTitle, contentDescription, contentPrice);
//   //   console.log("Content created successfully.");

//   // Purchase content
//   //const contentId = 0;
//   // const contentId = createContentTx.events[0].args.id;
//   // Retrieve the contentId
//   //const contentCount = await contract.contentCount();
//   // Get the latest contentId
//   //const contentId = createContentTx.events[0].args.id;
//   // const contentId = createContentTx.receipt.events.ContentCreated[0].args.id;
//   const contentId = createContentTx.events[0].args.id.toNumber();
//   // const contentId = contentCount - 1;
//   const purchaseAmount = 100; // Must be equal to or greater than contentPrice
//   await contract.purchaseContent(contentId, { value: purchaseAmount });
//   console.log("Content purchased successfully.");

//   // Grant license
//   //const accounts = await ethers.provider.listAccounts();
//   const licenseeAddress = accounts[0];
//   await contract.grantLicense(contentId, licenseeAddress);
//   console.log("License granted successfully.");

//   //   // Revoke license
//   //   await contract.revokeLicense(contentId, licenseeAddress);
//   //   console.log("License revoked successfully.");

//   // Get content information

//   const contentInfo = await contract.getContent(contentId1);
//   console.log("Content information:", contentInfo);
// }
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Load the contract ABI
  const jsonData = fs.readFileSync(
    "/Users/surbhisharma/blockchainProject/artifacts/contracts/ContentContract.sol/ContentContract.json"
  );
  const contractData = JSON.parse(jsonData);
  // Extract the contract ABI
  const abi = contractData.abi;

  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );

  // Deployed contract address
  const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Use the actual deployed contract address here

  // Create a signer using the first Ethereum address from the local network
  const accounts = await ethers.provider.listAccounts();
  const signer = provider.getSigner(accounts[0]);

  // Create an instance of the contract
  const contract = new ethers.Contract(contractAddress, abi, signer);

  // Interact with the contract
  const contentTitle = "My Content";
  const contentDescription = "Description of my content";
  const contentPrice = 100;

  // Create content
  const createContentTx = await contract.createContent(
    contentTitle,
    contentDescription,
    contentPrice
  );
  const createContentReceipt = await createContentTx.wait();
  const createContentEvent = createContentReceipt.events.find(
    (event) => event.event === "ContentCreated"
  );
  const contentId = createContentEvent.args.id.toNumber();
  console.log("Content created successfully. Content ID:", contentId);
  // Purchase content
  const purchaseAmount = 100; // Must be equal to or greater than contentPrice
  await contract.purchaseContent(contentId, { value: purchaseAmount });
  console.log("Content purchased successfully.");

  // Grant license
  const licenseeAddress = accounts[0];
  await contract.grantLicense(contentId, licenseeAddress);
  console.log("License granted successfully.");

  // Get content information
  const contentInfo = await contract.getContent(contentId);
  console.log("Content information:", contentInfo);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
