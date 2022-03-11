import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
//按需加载
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
//给html.index添加模板变量解析
import { minifyHtml, injectHtml } from 'vite-plugin-html';

/**
 * 获取vite打包环境模式
 */
function GetViteMode() {
  const modeIndex = process.argv.findIndex(v => v === '--mode') + 1;
  const mode = process.argv[modeIndex];
  return mode;
}

const mode = GetViteMode();

const basePath = '/sote_cli_api_base_url/';
const isProd = mode === 'production';
console.log('isProd:', isProd, '\r\nmode:', mode);

// https://vitejs.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tagName: string) => {
            //注册【sote-】开头的元素为自定义元素
            return tagName.startsWith('sote-');
          }
        }
      }
    }),
    Components({
      // 研究配置
      // ui库解析器，也可以自定义
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
    minifyHtml(),
    injectHtml({
      data: {
        title: '手机估价',
        isProd: isProd,
      }
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4200,
  },
  build: {
    outDir: 'dist/sote_cli_api_base_url/',
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: isProd,
        drop_debugger: true,
      },
    },
    chunkSizeWarningLimit: 1024, //单个文件限制大小
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      }
    }
  }
});
