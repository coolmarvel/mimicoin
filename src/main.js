const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

// Your private key goes here
const myKey = ec.keyFromPrivate();

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic("hex");

// Create new instance of Blockchain class
const mimiCoin = new Blockchain();

// Mine first block
mimiCoin.minePendingTransactions(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, "address2", 100);
tx1.signTransaction(myKey);
mimiCoin.addTransaction(tx1);

// Mine block
mimiCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
// const tx2 = new Transaction(myWalletAddress, "address1", 50);
// tx2.signTransaction(myKey);
// mimiCoin.addTransaction(tx2);

// // Mine block
// mimiCoin.minePendingTransactions(myWalletAddress);

// console.log();
// console.log(
//   `Balance of marvel is ${mimiCoin.getBalanceOfAddress(myWalletAddress)}`
// );

// // Uncomment this line if you want to test tampering with the chain
// // mimiCoin.chain[1].transactions[0].amount = 10;

// // Check if the chain is valid
// console.log();
// console.log("Blockchain valid?", mimiCoin.isChainValid() ? "Yes" : "No");
