const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  'hero2.png',
  'hero.png',
  'hero3.png',
  'Buziniro-Group.pdf-image-024.jpg'
];

async function compress() {
  for (const img of images) {
    const input = path.join(__dirname, 'Assets/images', img);
    const output = path.join(__dirname, 'Assets/images', img);
    
    if (!fs.existsSync(input)) continue;
    
    const ext = path.extname(img).toLowerCase();
    
    try {
      let pipeline = sharp(input).resize(1920, null, { withoutEnlargement: true });
      
      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
      } else if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80 });
      }
      
      await pipeline.toFile(output + '.tmp');
      fs.renameSync(output + '.tmp', output);
      
      const stats = fs.statSync(input);
      console.log(`${img}: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
    } catch (e) {
      console.error(`Error processing ${img}:`, e.message);
    }
  }
}

compress();
