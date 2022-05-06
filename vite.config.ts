import path from 'path'
import { defineConfig } from 'vite'
import Cat from './presets/cat'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [Cat()],
})
