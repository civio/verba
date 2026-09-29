import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

// eslint looks for mistakes; formatting is Prettier's job (npm run format)
export default [
  {
    ignores: ['**/dist/', 'test/.dist/', 'test-results/', 'playwright-report/'],
  },
  js.configs.recommended,
  ...vue.configs['flat/vue2-recommended'],
  prettier,
  // Page components like About or Search are fine as they are
  { rules: { 'vue/multi-word-component-names': 'off' } },
  { files: ['web/src/**'], languageOptions: { globals: globals.browser } },
  {
    files: ['api/**', 'test/**', '*.mjs', 'web/*.mjs'],
    languageOptions: { globals: globals.node },
  },
]
