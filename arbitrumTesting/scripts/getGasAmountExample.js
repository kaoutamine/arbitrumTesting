const { generateRandomAddressesAndKeys, generateAndSaveAddresses } = require('./adressGenerator');
const { Web3 } = require('web3');


const web3 = new Web3('http://localhost:8547'); // Replace with your Arbitrum node URL

const contractArtifact = require("../artifacts/contracts/ArbAdresses.sol/AddressTableInteraction.json");
const contractABI = contractArtifact.abi;
const contractAddress = '0xF7818cd5f5Dc379965fD1C66b36C0C4D788E7cDB'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function registerAndLookup() {
    const myAddress = "0x683642c22feDE752415D4793832Ab75EFdF6223c";
    const startTime = Date.now();
    console.log("started monitoring time");

    // Register addresses
    const receipt = await contract.methods.registerAddresses([myAddress])
                         .send({ from: myAddress })
                         .on('receipt', function(receipt){
                             return receipt;
                         });

    const gasUsed = receipt.gasUsed;
    const transaction = await web3.eth.getTransaction(receipt.transactionHash);
    const gasPrice = transaction.gasPrice;
    const totalGasCost = gasUsed * gasPrice;

    console.log('Total Gas Cost for registerAddresses transaction:', totalGasCost);

    // Lookup an address that exists
    const indexKnown = await contract.methods.lookupAddress(myAddress).call();

    // Get address table size
    const tableSize = await contract.methods.getAddressTableSize().call();  
    console.log(`table size: ${tableSize} `);

    const endTime = Date.now();
    console.log(`Execution Time: ${endTime - startTime} ms`);
    console.log(`Address Index: ${indexKnown}`);
    console.log(`Address Table Size: ${tableSize}`);
}

registerAndLookup();