const { Web3 } = require('web3');

const { generateRandomAddressesAndKeys, generateAndSaveAddresses } = require('./adressGenerator');
const web3 = new Web3('http://localhost:8547'); // Replace with your Arbitrum node URL


const contractArtifact = require("../artifacts/contracts/ArbAdresses.sol/AddressTableInteraction.json");


const contractABI = contractArtifact.abi;

const contractAddress = '0xF7818cd5f5Dc379965fD1C66b36C0C4D788E7cDB'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);


async function registerAndLookup() {

    
    
    const myAddress = "0x683642c22feDE752415D4793832Ab75EFdF6223c"

    const address1 = "0x3f1Eae7D46d88F08fc2F8ed27FCb2AB183EB2d0E"
    const unregisteredAddress = "0x683642c22feDE752415D4793832Ab75EFdF62231"

    const startTime = Date.now();

    console.log("started monitoring time")
    // Register addresses
    const size = await contract.methods.getAddressTableSize().call();  
    console.log(`table size: ${size} `);
    await contract.methods.registerAddresses([myAddress]).send({ from: myAddress });
    console.log("address registered")
    // Lookup an address that exists
    const indexKnown = await contract.methods.lookupAddress(myAddress).call();


    //lookup the address that has not been registered (how do i make new valid addresses????)
    //
    //const indexUknown = await contract.methods.lookupAddress(addressToLookup).call();

    // Get address table size
    const tableSize = await contract.methods.getAddressTableSize().call();  
    console.log(`table size: ${tableSize} `);

    const endTime = Date.now();

    console.log(`Execution Time: ${endTime - startTime} ms`);
    console.log(`Address Index: ${index}`);
    console.log(`Address Table Size: ${tableSize}`);
}

registerAndLookup();