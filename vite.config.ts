import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 需要先安装 @types/node
import svgr from 'vite-plugin-svgr' // 解析svg图标

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // 需要在路径后面添加?react 配置跟webpack不一样
      svgrOptions: {
        // exportType: 'named', // 默认导出 React 组件
        icon: true, // 允许像图标一样调整尺寸
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.svg'],
    alias: {
      '@': path.resolve(__dirname, './src'), // 将 @ 映射到 src 目录
      '.svg': '.svg?react', // 另一种方法直接在引入路径中添加?react
    },
  },
})
