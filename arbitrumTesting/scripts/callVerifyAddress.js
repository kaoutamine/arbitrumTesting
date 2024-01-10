const { ethers } = require("ethers");
const contractArtifact = require("../artifacts/contracts/addressChecker.sol/AddressExistsChecker.json");

async function main() {
    console.log("call verify script started")
    // Connect to your local Ethereum node
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8547");

    console.log("adding contract")
    // Add your wallet private key here to deploy the contract
    const privateKey = "e887f7d17d07cc7b8004053fb8826f6657084e88904bb61590e498ca04704cf2";
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log("successfully added the private key")

    // The ABI and bytecode of the compiled AddressExistsChecker contract
    const abi = contractArtifact.abi; // ABI of the contract
    const bytecode = contractArtifact.bytecode; // Bytecode of the contract

    console.log("successfully accessed the bytecode")
    // Deploy the contract
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    let contract = await factory.deploy();
    await contract.deployed();

    console.log("Contract deployed to:", contract.address);

    // Call the doesAddressExist function
    const addressToCheck = "0x683642c22feDE752415D4793832Ab75EFdF6223c";
    let exists = await contract.doesAddressExist(addressToCheck);
    console.log("Address exists:", exists);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});