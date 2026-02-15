import fs from "fs/promises";

const list = async () => {
  // Write your code here

  try {
    const files = await fs.readdir("./files");
    files.forEach((name) => {
      console.log(name);
    });
  } catch (error) {
    console.error("FS operation failed");
  }
};

await list();
