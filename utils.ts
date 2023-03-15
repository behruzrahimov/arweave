import { arweave } from "./arweave.js";
import { JWKInterface } from "arweave/node/lib/wallet.js";

export async function getWalletAddress(key: JWKInterface) {
  const walletAddress = await arweave.wallets.jwkToAddress(key);
  console.log("wallet address is ", walletAddress);
  return walletAddress;
}

export async function getWalletBalance(address: string) {
  const balance = await arweave.wallets.getBalance(address);
  let winston = balance;
  let ar = arweave.ar.winstonToAr(balance);
  console.log(winston);
  console.log(ar);
  return winston;
}
