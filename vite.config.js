import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import {quasar} from '@quasar/vite-plugin';
import {fileURLToPath} from 'node:url';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return ({
    plugins: [
      vue(),
      quasar({
        sassVariables: fileURLToPath(
          new URL('./src/styles/quasar-variables.sass', import.meta.url),
        ),
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          // DEBUG proxy requests
          // configure: (proxy, options) => {
          //   proxy.on('proxyReq', (proxyReq, req) => {
          //     console.log('Proxying request:', req.url);
          //   });
          // },
        },
      },
    },
  });
});
