# Arbitrum Gas Price Analysis and Input Fuzzing Project

## Introduction

This project centers on the Arbitrum platform, a prominent layer-2 scaling solution for Ethereum. Arbitrum enhances Ethereum's scalability by reducing transaction costs and increasing speed, while maintaining security and Ethereum compatibility.

## Project Goals

1. **Gas Price Calibration of Precompiles**: This project's final goal is to analyze the gas price calibration for precompiles on Arbitrum. Precompiles are crucial, smart contract-like operations integral to Ethereum's core functionality. Ensuring accurate gas pricing is vital for maintaining network efficiency and security.

2. **Input Fuzzing**: The ultimate goal is to engage in input fuzzing to test the robustness of the system. This involves providing a range of unexpected or random inputs to the precompiles to identify potential inefficiencies or unforeseen behaviors. The goal is to find mispricings of some of the precompiles in specific situation.

## Setup Instructions

### Prerequisites

- A basic understanding of blockchain technology, Ethereum, and smart contract development is recommended.

### Setting up the Nitro Test Devnode

1. Visit the [Arbitrum Nitro Test Devnode Setup](https://docs.arbitrum.io/node-running/how-tos/local-dev-node) documentation.
2. Follow the provided instructions to set up your local development node. 

### Running the Scripts

1. Clone the project repository.
2. Navigate to the repository folder on your local machine.
3. Run the scripts from the repository to deploy smart contracts that interact with Arbitrum precompiles. (We have done this on the nitro testnode)

### Workflow for a test run 
have two terminals running.
One should be in the nitro devnode and you should use the following command :
./test-node.bash 
it is possible to also have the blockscout explorer running :
./test-node.bash --blockscout

If necessary, use sudo.

In the other terminal, go to :
arbitrumTesting (this repository)

You can run the scripts using the following :
npx hardhat run scripts/arbAddressInteraction.js --network testNode (for example. for the arbAddressInteraction script)

### extra information
the addresses file contains the addresses available on the L2 blockchain, in the following format :
address 
private key
Need to find a way to create more 

## Conclusion

This project aims to contribute play around  the precompiles of the Arbitrum platform and see if we can find out interesting situations or scenarios.

---

**Disclaimer**: All activities should be performed in a test environment. 
