import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  // Keep the VUE_APP_ prefix from Vue CLI, so existing .env files still work
  envPrefix: 'VUE_APP_',
  // daterangepicker does require('moment') and breaks with moment's ES module build
  resolve: { alias: [{ find: /^moment$/, replacement: 'moment/moment.js' }] },
  server: { port: 8080 },
  css: {
    preprocessorOptions: {
      scss: { silenceDeprecations: ['import', 'global-builtin'] },
    },
  },
})
