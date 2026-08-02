import sharp from 'sharp';
import path from 'path';

async function processImage(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelData = Buffer.from(data);
  const channels = info.channels; // 4

  for (let i = 0; i < pixelData.length; i += channels) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];

    // Detect dark background pixels (dark charcoal/black background in input images)
    if (r < 50 && g < 50 && b < 50) {
      pixelData[i + 3] = 0;
    }
  }

  await sharp(pixelData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
  .webp({ quality: 95 })
  .toFile(outputPath);

  console.log(`Successfully converted ${inputPath} -> ${outputPath}`);
}

async function main() {
  const imgDir = path.join('c:', 'demo catering', 'public', 'startup-images');
  await processImage(path.join(imgDir, 'content.png'), path.join(imgDir, 'content.webp'));
  await processImage(path.join(imgDir, 'content 2.png'), path.join(imgDir, 'content-2.webp'));
}

main().catch(console.error);
