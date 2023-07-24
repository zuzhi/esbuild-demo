import * as esbuild from 'esbuild';
import jsonMerge from 'esbuild-plugin-json-merge'

async function runBuild() {
  try {
    await esbuild.build({
      entryPoints: ['app.jsx'],
      bundle: true,
      outdir: 'build',
      plugins: [
        jsonMerge({
          entryPoints: ['a.json', 'b.json'],
          outfile: 'common.json'
        })
      ]
    });
    console.log('Build complete: out.js generated.');
  } catch (error) {
    console.error('Build error:', error);
  }
}

runBuild();
