import Arweave from "arweave";

const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
  timeout: 20000,
  logging: false,
});

const key = await arweave.wallets.generate();
const address = await arweave.wallets.jwkToAddress(key);
console.log("address", address);
const balance = await arweave.wallets.getBalance(address);
console.log("balance", balance);
const transactionId = await arweave.wallets.getLastTransactionID(address);
console.log("transactionId", transactionId);
