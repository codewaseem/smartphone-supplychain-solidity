const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "damage anger material broom palace calm two brave leader shine sorry away";

module.exports = {
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/84eb4ea5d01547929644cdccdb782d73");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};