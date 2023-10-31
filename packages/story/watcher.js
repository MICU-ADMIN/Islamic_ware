import chokidar from "chokidar";
import fs from "fs";
import path from "path";
import fse from "fs-extra";

const srcFolder = "src"; // Change this to your source folder path
const destinationFolder = "destination"; // Change this to your destination folder path

const watcher = chokidar.watch(srcFolder, {
  ignored: /node_modules/,
  persistent: true,
});

console.log(`Watching ${srcFolder} for changes...`);

watcher
  .on("add", (filePath) => copyFile(filePath))
  .on("change", (filePath) => copyFile(filePath))
  .on("unlink", (filePath) => removeFile(filePath));

function copyFile(filePath) {
  const relativePath = path.relative(srcFolder, filePath);
  const destinationPath = path.join(destinationFolder, relativePath);
  const destinationDir = path.dirname(destinationPath);

  // Ensure the destination directory exists
  fs.promises
    .mkdir(destinationDir, { recursive: true })
    .then(() => fse.copy(filePath, destinationPath))
    .then(() => console.log(`Copied ${filePath} to ${destinationPath}`))
    .catch((err) =>
      console.error(`Error copying ${filePath} to ${destinationPath}: ${err}`)
    );
}

function removeFile(filePath) {
  const relativePath = path.relative(srcFolder, filePath);
  const destinationPath = path.join(destinationFolder, relativePath);

  fs.promises
    .unlink(destinationPath)
    .then(() => console.log(`Removed ${destinationPath}`))
    .catch((err) => console.error(`Error removing ${destinationPath}: ${err}`));
}
