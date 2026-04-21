export default {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write --semi false'],
  '*.{css,scss}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
}
