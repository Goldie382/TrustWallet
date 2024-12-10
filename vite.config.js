import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    
    react(),

    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  
  ],
})
