import {  ethers } from "hardhat";
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

    const encryptedJsonKey = await wallet.encrypt(
      process.env.PRIVATE_KEY_PASSWORD,
    );
    console.log(encryptedJsonKey);
    fs.writeFileSync('./keys/.encryptedKey.json', encryptedJsonKey);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
