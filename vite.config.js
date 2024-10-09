import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // path modülünü ekliyoruz

export default defineConfig({
  base:'/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' alias'ını 'src' klasörüne yönlendiriyoruz
    },
  },
  optimizeDeps: {
    include: ["react-icons/fa"], // react-icons/fa paketini optimize edilmesi için ekliyoruz
  },
});
