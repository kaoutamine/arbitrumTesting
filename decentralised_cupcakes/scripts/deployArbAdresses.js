async function main() {
  const AddressTableInteraction = await hre.ethers.deployContract('AddressTableInteraction');
  await AddressTableInteraction.waitForDeployment();
  console.log(`ArbAdresses machine deployed to ${AddressTableInteraction.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});