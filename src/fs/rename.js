import fs from "fs/promises";

const rename = async () => {
  // Write your code here

  try {
    await fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
  } catch (error) {
    console.error("FS operation failed");
  }
};

await rename();
