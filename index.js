// const { Client, PrivateKey } = require("@hashgraph/sdk");
// const Web3 = require("web3");

// require("dotenv").config();

// const accountId = process.env.ACCOUNT_ID; // Replace with your Hedera account ID
// const privateKey = process.env.PRIVATE_KEY; // Replace with your Hedera private key

// const client = Client.forTestnet();
// const operatorAccount = client.setOperator(
//   accountId,
//   PrivateKey.fromString(privateKey)
// );
// async function getEthereumAddress() {
//     const [account] = await ethers.getSigners();
//     const address = await account.getAddress();
//     return address;
//   }

//   // Call the function to get the Ethereum address
//   const ethereumAddress = await getEthereumAddress();

// // Connect to Ethereum network using Web3.js
// const providerUrl = "http://127.0.0.1:8545"; // Replace with your network provider URL
// const web3 = new Web3(providerUrl);
// //const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
// //const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
// // Rest of your code goes here
// // Connect to Ethereum network using Web3.js
// //const web3 = new Web3("http://127.0.0.1:8545"); // Replace with your network provider URL

// // Contract address and ABI
// const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your deployed contract address
// const contractABI = [
//   [
//     {
//       anonymous: false,
//       inputs: [
//         { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
//         {
//           indexed: false,
//           internalType: "string",
//           name: "title",
//           type: "string",
//         },
//         {
//           indexed: false,
//           internalType: "address",
//           name: "creator",
//           type: "address",
//         },
//       ],
//       name: "ContentCreated",
//       type: "event",
//     },
//     {
//       anonymous: false,
//       inputs: [
//         { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
//         {
//           indexed: false,
//           internalType: "string",
//           name: "title",
//           type: "string",
//         },
//         {
//           indexed: false,
//           internalType: "address",
//           name: "buyer",
//           type: "address",
//         },
//       ],
//       name: "ContentPurchased",
//       type: "event",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "", type: "uint256" },
//         { internalType: "address", name: "", type: "address" },
//       ],
//       name: "allowedLicensees",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [],
//       name: "contentCount",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "", type: "uint256" },
//         { internalType: "address", name: "", type: "address" },
//       ],
//       name: "contentPurchases",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       name: "contents",
//       outputs: [
//         { internalType: "string", name: "title", type: "string" },
//         { internalType: "string", name: "description", type: "string" },
//         { internalType: "uint256", name: "price", type: "uint256" },
//         { internalType: "address payable", name: "creator", type: "address" },
//         { internalType: "bool", name: "isPurchased", type: "bool" },
//         { internalType: "bool", name: "isLicensed", type: "bool" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "string", name: "_title", type: "string" },
//         { internalType: "string", name: "_description", type: "string" },
//         { internalType: "uint256", name: "_price", type: "uint256" },
//       ],
//       name: "createContent",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_contentId", type: "uint256" },
//       ],
//       name: "getContent",
//       outputs: [
//         { internalType: "string", name: "title", type: "string" },
//         { internalType: "string", name: "description", type: "string" },
//         { internalType: "uint256", name: "price", type: "uint256" },
//         { internalType: "address", name: "creator", type: "address" },
//         { internalType: "bool", name: "isLicensed", type: "bool" },
//       ],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_contentId", type: "uint256" },
//         { internalType: "address", name: "_licensee", type: "address" },
//       ],
//       name: "grantLicense",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_contentId", type: "uint256" },
//       ],
//       name: "purchaseContent",
//       outputs: [],
//       stateMutability: "payable",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "uint256", name: "_contentId", type: "uint256" },
//         { internalType: "address", name: "_licensee", type: "address" },
//       ],
//       name: "revokeLicense",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ],
//   // Paste your contract ABI here
//   // ... Paste the provided contract ABI array here
// ];

// // Create contract instance
// const contract = new web3.eth.Contract(contractABI, contractAddress);

// // Handle form submissions
// document
//   .getElementById("createContentForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("description").value;
//     const price = document.getElementById("price").value;

//     try {
//       // Create content on the blockchain
//       await contract.methods
//         .createContent(title, description, price)
//         .send({ from: "your_ethereum_address" });
//       alert("Content created successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while creating content.");
//     }
//   });

// document
//   .getElementById("purchaseContentForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const contentId = document.getElementById("contentId").value;
//     const purchaseAmount = document.getElementById("purchaseAmount").value;

//     try {
//       // Purchase content on the blockchain
//       await contract.methods
//         .purchaseContent(contentId)
//         .send({ from: "your_ethereum_address", value: purchaseAmount });
//       alert("Content purchased successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while purchasing content.");
//     }
//   });

// document
//   .getElementById("grantLicenseForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const contentIdLicense = document.getElementById("contentIdLicense").value;
//     const licenseeAddress = document.getElementById("licenseeAddress").value;

//     try {
//       // Grant license on the blockchain
//       await contract.methods
//         .grantLicense(contentIdLicense, licenseeAddress)
//         .send({ from: "your_ethereum_address" });
//       alert("License granted successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while granting the license.");
//     }
//   });

// document
//   .getElementById("getContentForm")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();
//     const contentIdGet = document.getElementById("contentIdGet").value;

//     try {
//       // Get content information from the blockchain
//       const content = await contract.methods.getContent(contentIdGet).call();
//       const title = content.title;
//       const description = content.description;
//       const price = content.price;
//       const creator = content.creator;
//       const isLicensed = content.isLicensed;

//       // Display content information
//       const output = document.getElementById("output");
//       output.innerHTML = `
//       <p><strong>Title:</strong> ${title}</p>
//       <p><strong>Description:</strong> ${description}</p>
//       <p><strong>Price:</strong> ${price}</p>
//       <p><strong>Creator:</strong> ${creator}</p>
//       <p><strong>Is Licensed:</strong> ${isLicensed}</p>
//     `;
//     } catch (error) {
//       console.error(error);
//       alert("An error occurred while getting content information.");
//     }
//   });
// const express = require("express");
// const app = express();

// // Define a route for the home page
// app.get("/", (req, res) => {
//   res.send("Welcome to the content creation platform!");
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

//const { ethers } = require("ethers");

const { Client, PrivateKey } = require("@hashgraph/sdk");
const Web3 = require("web3");

require("dotenv").config();

const accountId = process.env.ACCOUNT_ID; // Replace with your Hedera account ID
const privateKey = process.env.PRIVATE_KEY; // Replace with your Hedera private key

const client = Client.forTestnet();
const operatorAccount = client.setOperator(
  accountId,
  PrivateKey.fromString(privateKey)
);

// async function getEthereumAddress() {
//   const [account] = await ethers.getSigners();
//   const address = await account.getAddress();
//   return address;
// }

// async function startApp() {
//   try {
//     // Call the function to get the Ethereum address
//     // Set up the Ethereum provider
//     const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");

//     // Get the list of available accounts
//     const accounts = await provider.listAccounts();

//     // Use the first account for your application
//     const signer = provider.getSigner(accounts[0]);

// // Get the Ethereum address
// const ethereumAddress = await signer.getAddress();
//     // const provider = ethers.getDefaultProvider("ropsten");
//     // const signer = provider.getSigner();
//     // const ethereumAddress = await signer.getAddress();

//     //const ethereumAddress = await getEthereumAddress();

//     // Connect to Ethereum network using Web3.js
//     const providerUrl = "http://127.0.0.1:8545";
//     const web3 = new Web3(providerUrl);

//     // Contract address and ABI
//     const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"; // Replace with your deployed contract address
//     const contractABI = [
//       [
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "uint256",
//               name: "id",
//               type: "uint256",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "title",
//               type: "string",
//             },
//             {
//               indexed: false,
//               internalType: "address",
//               name: "creator",
//               type: "address",
//             },
//           ],
//           name: "ContentCreated",
//           type: "event",
//         },
//         {
//           anonymous: false,
//           inputs: [
//             {
//               indexed: true,
//               internalType: "uint256",
//               name: "id",
//               type: "uint256",
//             },
//             {
//               indexed: false,
//               internalType: "string",
//               name: "title",
//               type: "string",
//             },
//             {
//               indexed: false,
//               internalType: "address",
//               name: "buyer",
//               type: "address",
//             },
//           ],
//           name: "ContentPurchased",
//           type: "event",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "address", name: "", type: "address" },
//           ],
//           name: "allowedLicensees",
//           outputs: [{ internalType: "bool", name: "", type: "bool" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [],
//           name: "contentCount",
//           outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "", type: "uint256" },
//             { internalType: "address", name: "", type: "address" },
//           ],
//           name: "contentPurchases",
//           outputs: [{ internalType: "bool", name: "", type: "bool" }],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//           name: "contents",
//           outputs: [
//             { internalType: "string", name: "title", type: "string" },
//             { internalType: "string", name: "description", type: "string" },
//             { internalType: "uint256", name: "price", type: "uint256" },
//             {
//               internalType: "address payable",
//               name: "creator",
//               type: "address",
//             },
//             { internalType: "bool", name: "isPurchased", type: "bool" },
//             { internalType: "bool", name: "isLicensed", type: "bool" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "string", name: "_title", type: "string" },
//             { internalType: "string", name: "_description", type: "string" },
//             { internalType: "uint256", name: "_price", type: "uint256" },
//           ],
//           name: "createContent",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_contentId", type: "uint256" },
//           ],
//           name: "getContent",
//           outputs: [
//             { internalType: "string", name: "title", type: "string" },
//             { internalType: "string", name: "description", type: "string" },
//             { internalType: "uint256", name: "price", type: "uint256" },
//             { internalType: "address", name: "creator", type: "address" },
//             { internalType: "bool", name: "isLicensed", type: "bool" },
//           ],
//           stateMutability: "view",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_contentId", type: "uint256" },
//             { internalType: "address", name: "_licensee", type: "address" },
//           ],
//           name: "grantLicense",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_contentId", type: "uint256" },
//           ],
//           name: "purchaseContent",
//           outputs: [],
//           stateMutability: "payable",
//           type: "function",
//         },
//         {
//           inputs: [
//             { internalType: "uint256", name: "_contentId", type: "uint256" },
//             { internalType: "address", name: "_licensee", type: "address" },
//           ],
//           name: "revokeLicense",
//           outputs: [],
//           stateMutability: "nonpayable",
//           type: "function",
//         },
//       ],
//       // Paste your contract ABI here
//       // ... Paste the provided contract ABI array here
//     ];

//     // Create contract instance
//     const contract = new web3.eth.Contract(contractABI, contractAddress);

//     // Handle form submissions
//     document
//       .getElementById("createContentForm")
//       .addEventListener("submit", async function (event) {
//         event.preventDefault();
//         const title = document.getElementById("title").value;
//         const description = document.getElementById("description").value;
//         const price = document.getElementById("price").value;

//         try {
//           // Create content on the blockchain
//           await contract.methods
//             .createContent(title, description, price)
//             .send({ from: ethereumAddress });
//           alert("Content created successfully!");
//         } catch (error) {
//           console.error(error);
//           alert("An error occurred while creating content.");
//         }
//       });

//     document
//       .getElementById("purchaseContentForm")
//       .addEventListener("submit", async function (event) {
//         event.preventDefault();
//         const contentId = document.getElementById("contentId").value;
//         const purchaseAmount = document.getElementById("purchaseAmount").value;

//         try {
//           // Purchase content on the blockchain
//           await contract.methods
//             .purchaseContent(contentId)
//             .send({ from: ethereumAddress, value: purchaseAmount });
//           alert("Content purchased successfully!");
//         } catch (error) {
//           console.error(error);
//           alert("An error occurred while purchasing content.");
//         }
//       });

//     document
//       .getElementById("grantLicenseForm")
//       .addEventListener("submit", async function (event) {
//         event.preventDefault();
//         const contentIdLicense =
//           document.getElementById("contentIdLicense").value;
//         const licenseeAddress =
//           document.getElementById("licenseeAddress").value;

//         try {
//           // Grant license on the blockchain
//           await contract.methods
//             .grantLicense(contentIdLicense, licenseeAddress)
//             .send({ from: ethereumAddress });
//           alert("License granted successfully!");
//         } catch (error) {
//           console.error(error);
//           alert("An error occurred while granting the license.");
//         }
//       });

//     document
//       .getElementById("getContentForm")
//       .addEventListener("submit", async function (event) {
//         event.preventDefault();
//         const contentIdGet = document.getElementById("contentIdGet").value;

//         try {
//           // Get content information from the blockchain
//           const content = await contract.methods
//             .getContent(contentIdGet)
//             .call();
//           const title = content.title;
//           const description = content.description;
//           const price = content.price;
//           const creator = content.creator;
//           const isLicensed = content.isLicensed;

//           // Display content information
//           document.getElementById("contentInfo").innerText = `
//           Title: ${title}
//           Description: ${description}
//           Price: ${price}
//           Creator: ${creator}
//           Licensed: ${isLicensed ? "Yes" : "No"}
//         `;
//         } catch (error) {
//           console.error(error);
//           console.error("An error occurred while fetching content information.");
//         }
//       });
//   } catch (error) {
//     console.error(error);
//    console.error("An error occurred while initializing the application.");
//   }
// }

// // Call the asynchronous function to start the application
// startApp();
