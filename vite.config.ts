import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 需要先安装 @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 @ 映射到 src 目录
    },
  },
})
