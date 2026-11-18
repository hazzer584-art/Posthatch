// Extracts the reviewed public website archive for Netlify builds.
const fs = require('node:fs');
const zlib = require('node:zlib');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const os = require('node:os');
const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'posthatch-'));
const tarPath = path.join(scratch, 'website.tar');
try {
  fs.mkdirSync('website', { recursive: true });
  fs.writeFileSync(tarPath, zlib.brotliDecompressSync(fs.readFileSync('website.tar.br')));
  execFileSync('tar', ['-xf', tarPath, '-C', 'website'], { stdio: 'inherit' });
  if (!fs.existsSync('website/index.html')) throw new Error('Website extraction failed');
  console.log('PostHatch website ready for publishing');
} finally {
  fs.rmSync(scratch, { recursive: true, force: true });
}
