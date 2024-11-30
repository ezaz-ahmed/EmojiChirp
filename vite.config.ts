import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@sections': path.resolve(__dirname, 'src/sections'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },
})
