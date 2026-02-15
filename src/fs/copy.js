import fs from "fs/promises";

const copy = async () => {
  // Write your code here

  try {
    await fs.mkdir("./files_copy", { recursive: true });
    await fs.cp("./files", "./files_copy", {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    console.error("FS operation failed");
  }
};

await copy();
