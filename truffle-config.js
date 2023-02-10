// require('babel-register')
// require('babel-polyfill')
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const private_key = "0a5cf65340aea3fe96c399015310d177a99d7af101bea43fdde5441d0f1e529b";
const provider = new HDWalletProvider(
  private_key,
  "https://goerli.infura.io/v3/526830d66ec045c0898a67fed0e1e4ea"
);

module.exports = {
  // Configure networks (Localhost, Rinkeby, etc.)
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    goerli: {
      provider: provider,
      network_id: 5,
      gas: 5500000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    // mumbaimatic: {
    //   provider: provider,
    //   network_id: 80001,
    //   confirmations: 2,
    // },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
