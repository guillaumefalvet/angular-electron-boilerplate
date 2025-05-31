const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  htmlWhitespaceSensitivity: 'css',
  jsxBracketSameLine: true,
  printWidth: 100,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  plugins: [
    'prettier-plugin-css-order',
    'prettier-plugin-organize-attributes',
    'prettier-plugin-packagejson'
  ],
  attributeGroups: [
    '$ANGULAR_INPUT',
    '$ANGULAR_OUTPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_STRUCTURAL_DIRECTIVE'
  ]
};

module.exports = config;
