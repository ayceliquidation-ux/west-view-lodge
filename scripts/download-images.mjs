import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '../public/images');

const HOST_PORTRAIT = {
  filename: 'host-casey.jpg',
  urls: [
    'https://a0.muscache.com/im/pictures/user/User/original/8708a8b5-feff-4774-8d64-1946ee72f3ff.jpeg',
  ],
};

const PHOTO_URLS = [
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/34622372-e1f3-473a-8f79-f923ce5c64f1.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/26e338d4-3b85-4060-8557-9db09003cdff.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/fa540747-e45b-4c55-a09f-10e1b70bfa4b.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/16258b1b-b959-465e-95e9-ad118b036055.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ea65f6a8-853d-4620-91c5-ac8c945ba59a.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/3b01ca64-3a6f-448a-af0b-13d802306a19.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/7b7e2849-abd0-4335-818c-e4a0c70c1ccc.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/7c9a9a36-ff90-4372-8c8f-b16f3fb92764.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/84a7d9f6-ce1e-4b20-9b1e-3706d9c10b51.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/5438657c-7fff-41d7-a8e0-d749a61a727f.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/86d9aba8-9170-42b5-a387-0e08140aa172.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/169b4524-00f1-44d0-b045-79b03beb2958.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/18624e5d-7ba4-4225-a051-01440771fc08.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/64a72ba0-7509-4e21-9e22-10e86f13ad3d.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/de237ffa-4ff8-4061-b073-9b52a62e9902.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/03a29f8c-d16f-4b65-983c-af3f47316b6f.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/53d7d758-51a8-4d7a-b2e4-efbb2c3c739e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/bd231475-6c04-4f7e-9a37-b5372cfd54f1.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/c2704b13-92ef-4e8b-91f4-9f3c525b6252.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/beb7ddfa-2d0f-4d9f-a222-91eab31471b8.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/8c38d507-6348-4024-a0a5-f20ad93bcf74.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/310e3faa-a97c-4364-8fb8-cd88775f106e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/3ea9f3c6-68f2-4932-9bd3-1df13d9d0ff7.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/e30da6f0-2411-41fd-96a1-f45824c2e604.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/d1f35c6e-447f-45bd-92ca-18c75550cc4f.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/b54b8540-1a5e-4b86-8afe-70dbf09d470f.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/edd10c26-ccca-48f9-a645-01803e1bdffc.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/6530de8c-f5fe-4890-8bc8-e7e607364c48.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/4c1b9ff7-bbf0-41f1-b243-6f5410dec865.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/40a7f2c5-433d-4e1e-b253-35cbc638f48e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/c1b0e38e-7749-46f3-8b1e-fb0459c2dad9.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/aa7b14d7-ef48-49c2-92dd-3acdf2f3cd35.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/fcc6961e-9b4a-47a8-a7b2-4bac5c8139e2.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/76a9c149-a94d-41f4-bbcd-656a71ef6292.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ccbc70ff-1b91-4313-ba2d-638b22faf18d.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/9d1cf91c-f35a-43ce-b374-f2e79f439d30.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/14bbdc64-1436-4676-a2cd-dbc7a211feab.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/50ea7cbb-f6a9-40ec-8a37-93bd1a954172.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/c288e6b0-38b4-42b1-8a1c-59412d31c55e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/46c2f7f8-1d1f-49b6-a2a0-5b5dd6d50b60.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/3465dcef-c5c7-4839-8057-0e5fc2964ec6.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/02d44325-f81c-4177-af39-09828551eb79.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/391f98a1-7505-49ff-b370-72ff19a7ca44.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/1bb85450-7c17-4246-962f-23b4dbe1242a.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/71722d52-f25e-4348-8cfc-2401258ecf7e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/eaca2500-0d70-467c-8b54-cec188a853eb.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/c606489f-516e-466a-b985-a199fce68c5c.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/d11e76c9-b03d-47fa-a55c-3cb32f601e00.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ce73e16c-56df-4a88-aeca-1ff52c06fd38.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/0d65b888-41e6-4322-97a4-615a6ec61ed6.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/97059478-9809-4731-96f1-3e7424ac7425.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/38befa06-4ee0-4d57-9a0d-af6184849eca.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ef150e31-ac2f-47d1-bcd7-186a25a06de2.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/08d0c59f-2e01-4555-907c-b6f269605da0.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ec7d8129-63ab-4d00-ab50-4b96d18a2376.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/b1567a47-bb72-40cd-a18a-9214f8c9bc2e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/7dd15db0-f778-406c-bfdc-2cf8ec6ac21d.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/0ffe8a47-d640-4696-90d4-05f718403df6.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/9a76e75e-bb5f-48ba-b8ba-b827267d94cf.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/1d054e86-2aa7-4011-be6b-398e9d3a3156.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/cf8e7fcd-76f9-494f-99ec-aac45b9b0e46.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ec5e21d4-a978-4883-8f86-f9ee5a3251d5.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/6af33a5d-bed2-45b1-89cf-a74701d3e04e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/ac4dc795-2e79-4458-bad7-952b1cbb4545.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/bf00ee98-6dcb-4747-b267-73aceef3cfa2.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/33d8fd95-98d3-4cba-b424-a04fedec8334.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/33ce3b5e-43a2-4a23-adbc-b92640dfd041.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/40f79832-7e9e-4ac8-a140-b2d81fb1475b.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/11d9f754-72f3-4edc-a945-f45860878820.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/39928898-9c54-43f9-8db1-bac7cadf7b16.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/4e614c70-2df3-4115-a1a6-8ef585a5b673.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/9bff04f3-ad11-423c-9ba7-ce5eaab80a77.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/009a1963-0126-4ab9-be56-fcb235444a07.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/70864d1c-4bab-4d5a-bd1e-2b7d16c9e7f7.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/858cc4e9-8db7-411b-ab7e-2238255fa10e.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/367e8b6a-a14f-4ac0-b4ae-e547326ca164.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/27b59048-1218-4b66-bb5b-c69ca60a1f8d.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/8f2b7ee7-6284-43c2-9973-7c3bc2b7e771.jpeg',
  'https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/11d58a92-5825-40da-b511-426f679953bc.jpeg',
];

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.airbnb.com/',
};

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadFile(filename, candidateUrls, retries = 4) {
  const destPath = path.join(outDir, filename);
  try {
    const stat = await fs.stat(destPath);
    if (stat.size > 1000) {
      console.log(`[SKIP] ${filename} already exists (${(stat.size / 1024).toFixed(1)} KB)`);
      return true;
    }
  } catch {
    // does not exist yet
  }

  for (const url of candidateUrls) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        const res = await fetch(url, { headers: HEADERS });
        if (res.status === 404) {
          console.warn(`[404] ${filename} -> ${url}`);
          break; // try next candidate URL immediately
        }
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (buffer.length < 1000) {
          throw new Error(`Downloaded payload too small (${buffer.length} bytes)`);
        }
        await fs.writeFile(destPath, buffer);
        console.log(`[OK]   ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
        return true;
      } catch (err) {
        console.warn(`[RETRY ${attempt}/${retries}] ${filename} from ${url}: ${err.message}`);
        await sleep(600 * attempt);
      }
    }
  }
  console.error(`[FAIL] Could not download ${filename}`);
  return false;
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const tasks = [HOST_PORTRAIT];
  PHOTO_URLS.forEach((url, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const urls = [url];
    if (url.includes('02d44325-f81c-4177-af39-09828551eb79.jpeg')) {
      urls.push('https://a0.muscache.com/im/pictures/hosting/Hosting-1760984114398559371/original/02d44325-f81c-4177-af39-09828531eb79.jpeg');
    }
    tasks.push({
      filename: `photo-${num}.jpg`,
      urls,
    });
  });

  console.log(`Starting download of ${tasks.length} images into ${outDir}...`);

  // Process in batches of 6 for fast, polite downloading
  const concurrency = 6;
  let successCount = 0;
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const current = tasks[index++];
      const ok = await downloadFile(current.filename, current.urls);
      if (ok) successCount++;
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  console.log(`\nDownload summary: ${successCount}/${tasks.length} images downloaded successfully.`);
  if (successCount !== tasks.length) {
    process.exit(1);
  }
}

main();
