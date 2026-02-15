import { log } from "console";
import fs from "fs/promises";

const read = async () => {
    // Write your code here 

  try {
    const data = await fs.readFile("./files/fileToRead.txt",'utf8');
    console.log(data);
} catch (error) {
    console.error("FS operation failed");
  }

};

await read();