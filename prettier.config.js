const prettierSortConfig = {
  importOrder: [
    '^react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '',
    '^lib',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderTypeScriptVersion: '5.0.0',
};

module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  singleAttributePerLine: true,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  bracketSameLine: false,
  proseWrap: 'never',
  quoteProps: 'preserve',
  tabWidth: 2,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  pluginSearchDirs: false,
  tailwindFunctions: ['clsx', 'cva', 'containerClassName'],

  ...prettierSortConfig,
};
