import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//테일윈드 라이브러리
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss(),
  ],
  
})
