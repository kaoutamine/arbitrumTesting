const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

function generateRandomAddressesAndKeys(count) {
    const walletDetails = [];
    for (let i = 0; i < count; i++) {
        const wallet = ethers.Wallet.createRandom();
        walletDetails.push({
            address: wallet.address,
            privateKey: wallet.privateKey
        });
    }
    return walletDetails;
}

function saveWalletDetailsToFile(walletDetails, filename) {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, JSON.stringify(walletDetails, null, 2), 'utf-8');
    console.log(`Wallet details saved to ${filePath}`);
}

function generateAndSaveAddresses(count, filename) {
    const walletDetails = generateRandomAddressesAndKeys(count);
    saveWalletDetailsToFile(walletDetails, filename);
}

module.exports = { generateRandomAddressesAndKeys, generateAndSaveAddresses };
