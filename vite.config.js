import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Varlet UI
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()]
    })
  ],
  // 静态资源服务的文件夹
  publicDir:'assets',
  base:'/friends/'
})
