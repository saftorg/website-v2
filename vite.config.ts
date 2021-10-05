import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'views', replacement: '/src/views' },
      { find: 'components', replacement: '/src/components' },
    ]
  }
})

