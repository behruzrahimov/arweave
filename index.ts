import fetch from "node-fetch";
import { arweave } from "./arweave.js";
import { getWalletAddress, getWalletBalance } from "./utils.js";
(global as any).fetch = fetch;
(global as any).Headers = fetch.Headers;

const key = await arweave.wallets.generate();
const address = await getWalletAddress(key);
console.log("address", address);
const balance = await getWalletBalance(address);
console.log(balance);
const transaction = await arweave.createTransaction(
  {
    data: "hello world",
  },
  key
);
await arweave.transactions.sign(transaction, key);
const post = await arweave.transactions.post(transaction);
console.log(post);
// let uploader = await arweave.transactions.getUploader(transaction);

const transactionId = transaction.id;
console.log("transactionId", transactionId);
// const getData = await arweave.transactions.getData(transactionId, {
//   decode: true,
//   string: true,
// });
//
// console.log("getData", getData);
