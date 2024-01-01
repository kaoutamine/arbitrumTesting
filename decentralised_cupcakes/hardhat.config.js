require('@nomicfoundation/hardhat-toolbox');

// NEVER record important private keys in your code - this is for demo purposes
const GOERLI_TESTNET_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.18',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testNode: {
      url: 'http://localhost:8547',
      chainId: 412346,
      accounts : ['e887f7d17d07cc7b8004053fb8826f6657084e88904bb61590e498ca04704cf2'], //this is a test account private key 
    },
    arbitrumGoerli: {
      url: 'https://goerli-rollup.arbitrum.io/rpc',
      chainId: 421613,
      //accounts: [GOERLI_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },
};