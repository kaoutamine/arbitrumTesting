const { Web3 } = require('web3');

const { generateRandomAddressesAndKeys, generateAndSaveAddresses } = require('./adressGenerator');
const web3 = new Web3('http://localhost:8547'); // Replace with your Arbitrum node URL


const contractArtifact = require("../artifacts/contracts/ArbAdresses.sol/AddressTableInteraction.json");
const createAccountFromPrivateKey = require('./createAccountFromPrivateKey');

const contractABI = contractArtifact.abi;

const contractAddress = '0xF7818cd5f5Dc379965fD1C66b36C0C4D788E7cDB'; // Replace with your contract address
const contract = new web3.eth.Contract(contractABI, contractAddress);


async function registerAndLookup() {

    
    
    const myAddress = "0x683642c22feDE752415D4793832Ab75EFdF6223c"

    const walletDetails = generateRandomAddressesAndKeys(6); //TODO : I'm not sure if the registered addresses need to be spawned on the node itself or if I can just register any valid address and it's not being checked
    const registeredAddressesAndKeys = walletDetails.slice(0, walletDetails.length - 1);

    const addressToLookup = walletDetails[3]; // Replace with an address to look up
    const addressUnknown = walletDetails[walletDetails.length]

    //need to extract only the name of the addresses, not the private key
    const registeredAdresses = walletDetails.slice(0, 5).map(wallet => wallet.address);
    const privateKeys = alletDetails.slice(0, 5).map(wallet => wallet.privateKey);
    //I got my answer by testing : the addresses need to be created on the blockchain, the arbaddress function checks. Need to figure out how to register new addresses...
    //now it becomes obvious that the way i coded the address generation does not make sense. I should just generate them from the devnode itself and then store them somewhere. 
    const account = createAccountFromPrivateKey(myPrivateKey);

    privateKeys.forEach(privateKey => {
        const account = createAccountFromPrivateKey(privateKey);
        if (account) { 
            console.log(`Ethereum Account Created for Private Key: ${privateKey}`);
            console.log(`Address: ${account.address}`);
            
        }
    });
    

    const startTime = Date.now();
    console.log(registeredAdresses)
    console.log("registering the addresses")
    // Register addresses
    await contract.methods.registerAddresses(registeredAdresses).send({ from: myAddress });

    console.log("finished registering the addresses, looking up a known address")
    // Lookup an address that exists
    const indexKnown = await contract.methods.lookupAddress(addressToLookup).call();


    //lookup the address that has not been registered
    const indexUknown = await contract.methods.lookupAddress(addressToLookup).call();

    // Get address table size
    const tableSize = await contract.methods.getAddressTableSize().call();  

    const endTime = Date.now();

    console.log(`Execution Time: ${endTime - startTime} ms`);
    console.log(`Address Index: ${index}`);
    console.log(`Address Table Size: ${tableSize}`);
}

registerAndLookup();