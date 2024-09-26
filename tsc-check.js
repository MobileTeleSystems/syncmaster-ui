const { execSync } = require('child_process');

try {
  execSync('tsc --noEmit -p tsconfig.json', { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
