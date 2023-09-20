import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue()],
  css:{
    // set Sass varibles
    preprocessorOptions:{
      sass:{
        // this option make project could import Sass main files
        additionalData: `@import "@/styles/main.scss";`,
        implementation: sass,
      },
    },
  },
  
});
