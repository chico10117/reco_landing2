import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticDir = path.join(__dirname, '..', 'static');

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = null,
    quality = 85,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality, progressive: true });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    }

    await pipeline.toFile(outputPath);
    
    const originalSize = (await fs.stat(inputPath)).size;
    const newSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ Optimized ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  Size: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% saved)`);
    
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  // Critical images to optimize
  const images = [
    // Hero images
    {
      input: path.join(staticDir, 'img', 'hero.png'),
      output: path.join(staticDir, 'img', 'hero.webp'),
      options: { width: 1200, quality: 85 }
    },
    {
      input: path.join(staticDir, 'img', 'hero.png'),
      output: path.join(staticDir, 'img', 'hero-mobile.webp'),
      options: { width: 600, quality: 80 }
    },
    // Logo images
    {
      input: path.join(staticDir, 'RecoNombre.png'),
      output: path.join(staticDir, 'RecoNombre.webp'),
      options: { width: 800, quality: 85 }
    },
    {
      input: path.join(staticDir, 'VIPS.png'),
      output: path.join(staticDir, 'VIPS.webp'),
      options: { width: 400, quality: 90 }
    },
    {
      input: path.join(staticDir, 'HonestGreens.png'),
      output: path.join(staticDir, 'HonestGreens.webp'),
      options: { width: 400, quality: 90 }
    },
    {
      input: path.join(staticDir, 'Basque.png'),
      output: path.join(staticDir, 'Basque.webp'),
      options: { width: 400, quality: 90 }
    },
    {
      input: path.join(staticDir, 'cinepolis.png'),
      output: path.join(staticDir, 'cinepolis.webp'),
      options: { width: 400, quality: 90 }
    },
    // Pricing page images
    {
      input: path.join(staticDir, 'img', 'Basic.png'),
      output: path.join(staticDir, 'img', 'Basic.webp'),
      options: { width: 600, quality: 85 }
    },
    {
      input: path.join(staticDir, 'img', 'Emp.png'),
      output: path.join(staticDir, 'img', 'Emp.webp'),
      options: { width: 600, quality: 85 }
    },
    {
      input: path.join(staticDir, 'img', 'Emp2.png'),
      output: path.join(staticDir, 'img', 'Emp2.webp'),
      options: { width: 600, quality: 85 }
    },
    {
      input: path.join(staticDir, 'img', 'Gratis2.png'),
      output: path.join(staticDir, 'img', 'Gratis2.webp'),
      options: { width: 600, quality: 85 }
    },
    // Team photos (already webp but let's check if they exist)
    {
      input: path.join(staticDir, 'Andres.webp'),
      output: path.join(staticDir, 'Andres-optimized.webp'),
      options: { width: 200, quality: 80 }
    },
    {
      input: path.join(staticDir, 'Isabel.webp'),
      output: path.join(staticDir, 'Isabel-optimized.webp'),
      options: { width: 200, quality: 80 }
    }
  ];

  let totalOriginal = 0;
  let totalNew = 0;

  for (const image of images) {
    try {
      await fs.access(image.input);
      const result = await optimizeImage(image.input, image.output, image.options);
      if (result) {
        totalOriginal += result.originalSize;
        totalNew += result.newSize;
      }
    } catch (error) {
      console.log(`⚠️  Skipping ${path.basename(image.input)} - file not found`);
    }
  }

  console.log('\n📊 Summary:');
  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total optimized size: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%`);
}

main().catch(console.error);