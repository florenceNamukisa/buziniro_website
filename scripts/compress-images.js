import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, '..', 'Assets', 'images');

const images = [
  'hero2.png',
  'hero.png',
  'hero3.png',
  'Buziniro-Group.pdf-image-024.jpg'
];

async function compress() {
  for (const img of images) {
    const input = path.join(imagesDir, img);
    const output = path.join(imagesDir, img);
    
    if (!fs.existsSync(input)) {
      console.log(`Not found: ${input}`);
      continue;
    }
    
    const ext = path.extname(img).toLowerCase();
    const stats = fs.statSync(input);
    console.log(`Processing ${img}: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
    
    try {
      let pipeline = sharp(input).resize(1920, null, { withoutEnlargement: true });
      
      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
      } else if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80 });
      }
      
      await pipeline.toFile(output + '.tmp');
      fs.renameSync(output + '.tmp', output);
      
      const newStats = fs.statSync(input);
      console.log(`  -> ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
    } catch (e) {
      console.error(`Error processing ${img}:`, e.message);
    }
  }
}

compress();
