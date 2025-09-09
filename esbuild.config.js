import esbuild from 'esbuild';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GasPlugin } from 'esbuild-gas-plugin';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get git info
const getGitHash = () => {
  try {
    return execSync('git rev-parse HEAD').toString().trim().substring(0, 7);
  } catch {
    return 'unknown';
  }
};

const getGitBranch = () => {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
};

// Read package.json
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Create banner
const banner = `/*
This is an auto generated file, do not edit it directly!
**********************************************************************
        ref: #${getGitHash()} / ${getGitBranch()}
        repo: ${pkg.repository}
        ${pkg.name} v${pkg.version}
        (c) 2017-${new Date().getFullYear()} ${pkg.author}
        Released under ${pkg.license}.
**********************************************************************
*/`;

// Gas plugin functionality - add global object wrapper
const gasPlugin = {
  name: 'gas-plugin',
  setup(build) {
    build.onEnd(async (result) => {
      if (result.errors.length > 0) return;
      
      const outputPath = path.join(__dirname, 'dist', 'bundle.js');
      const content = fs.readFileSync(outputPath, 'utf8');
      
      // Wrap in GAS-compatible format
      const gasContent = `${banner}\n${content}`;
      
      fs.writeFileSync(outputPath, gasContent);
    });
  },
};

// Clean and create dist directory
if (fs.existsSync('./dist')) {
  fs.rmSync('./dist', { recursive: true });
}
fs.mkdirSync('./dist', { recursive: true });

// Copy appsscript.json
try {
  fs.copyFileSync('./src/appsscript.json', './dist/appsscript.json');
} catch (err) {
  console.warn('appsscript.json not found, skipping copy');
}

// Build with esbuild
esbuild.build({
  entryPoints: ['./src/addon.js'],
  bundle: true,
  outfile: './dist/bundle.js',
  plugins: [GasPlugin],
  minify: false,
}).catch(() => process.exit(1));