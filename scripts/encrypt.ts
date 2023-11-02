
import { formatEther, parseEther } from "viem";
import {  ethers } from "hardhat";
// import {  JsonRpcProvider } from "ethers";
// import 'dotenv/config';

import * as fs from 'fs';
// const fs = require('fs');
// import hre from "hardhat";

import * as dotenv from 'dotenv';
dotenv.config();

async function main() {

    // const provider = new JsonRpcProvider('http://localhost:8545');

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

    const encryptedJsonKey = await wallet.encrypt(
      process.env.PRIVATE_KEY_PASSWORD,
    );
    console.log(encryptedJsonKey);
    fs.writeFileSync('./.encryptedKey.json', encryptedJsonKey);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
