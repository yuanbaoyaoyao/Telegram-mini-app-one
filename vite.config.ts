import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue(),basicSsl()],
  server: {
    host: '0.0.0.0',
    https: true
  },
})
