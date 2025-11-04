import fetch from "node-fetch"
import fs from "fs"
import path from "path"

const memeUrls = [
  "https://i.pinimg.com/1200x/86/91/88/869188e28c63c5fd27816744bf84d2c4.jpg",
  "https://i.pinimg.com/736x/4c/0c/4c/4c0c4c133ce344d98dcf5b87566416d2.jpg",
  "https://i.pinimg.com/736x/4d/90/35/4d9035ee7bb30f8c274a3fa171504481.jpg",
  "https://i.pinimg.com/736x/ba/f0/35/baf035ab84a13b53bf6e46662fb4b610.jpg",
  "https://i.pinimg.com/736x/5f/42/d1/5f42d1530f48dba92e8fbafbcc92626c.jpg",
  "https://i.pinimg.com/736x/f0/5b/39/f05b3989614fa591313f7e4a83ea111e.jpg",
  "https://i.pinimg.com/736x/d4/58/55/d458558f34e6d1cc04587a8190a635cf.jpg",
  "https://i.pinimg.com/736x/39/dd/3e/39dd3e9e61b850b619d37837eb6f76f6.jpg",
  "https://i.pinimg.com/736x/c4/25/8a/c4258af23cbec75fbd7abaaf75c48a66.jpg",
]

const publicDir = path.join(process.cwd(), "public")

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

async function downloadImage(url, filename) {
  try {
    console.log(`Downloading ${filename}...`)
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
    }

    const buffer = await response.buffer()
    const filepath = path.join(publicDir, filename)
    fs.writeFileSync(filepath, buffer)
    console.log(`✓ Saved ${filename}`)
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message)
  }
}

async function downloadAll() {
  console.log("Starting image downloads...\n")
  for (let i = 0; i < memeUrls.length; i++) {
    await downloadImage(memeUrls[i], `meme-${i + 1}.jpg`)
  }
  console.log("\n✓ Download complete!")
}

downloadAll()
