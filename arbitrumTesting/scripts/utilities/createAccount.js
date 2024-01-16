async function main() {
    const ethers = hre.ethers;

    const wallet = ethers.Wallet.createRandom();
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
    
    const provider = ethers.provider;
    const balance = await provider.getBalance(wallet.address);
    console.log("Balance:", ethers.utils.formatEther(balance), "ETH");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});