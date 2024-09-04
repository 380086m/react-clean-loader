const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "dist/index.d.ts");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const result = data.replace(/import React\$1 from 'react';\n/g, "");

  fs.writeFile(filePath, result, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File successfully updated");
    }
  });
});
