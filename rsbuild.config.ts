import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  output: {
    distPath: {
      root: 'build',
    },
  },
  plugins: [pluginReact()],
  dev: {
    // Enable fast refresh
    hmr: true,
  },
  html: {
    template: './public/index.html',
  },
  tools: {
    // Add any custom webpack configurations if needed
  },
});
