import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Modules from 'vite-plugin-use-modules'

export default () => {
  return [
    // 模块自动加载
		Modules({
			auto: true,
		}),
    vue(),
    
    Pages({
      importMode: 'sync',
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dts: './presets/types/auto-imports.d.ts',
    }),

    Components({
      dts: resolve(__dirname, './types/components.d.ts'),
      types: [
        {
          from: 'vue-router',
          names: ['RouterView', 'RouterLink'],
        },
      ],
    }),
    Unocss({
      configFile: resolve(__dirname, 'uno.config.ts'),
    }),
  ]
}
