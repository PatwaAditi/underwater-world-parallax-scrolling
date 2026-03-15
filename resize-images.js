
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'Assets');
const outputDir = path.join(__dirname, 'src', 'assets', 'modal-images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(assetsDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    if (path.extname(file).toLowerCase() === '.webp' && file !== 'waterdrops.webp') {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(outputDir, file);

      sharp(inputPath)
        .resize({ width: 800 })
        .toFile(outputPath, (err, info) => {
          if (err) {
            console.error(`Error resizing ${file}:`, err);
          } else {
            console.log(`Resized ${file} successfully.`);
          }
        });
    }
  });
});
