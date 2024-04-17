import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://CarolinaTorrejonN.github.io/desafio_api_react_vite/'
})
