// @docs: https://laravel-mix.com/docs/6.0/examples
// @docs: https://laravel-mix.com/docs/6.0/cli
// @reference: https://live-the-dreams.medium.com/getting-webpack-5-laravel-mix-public-path-dynamically-set-to-your-shopify-assets-folder-vue-js-20932238c1b6

var mix = require('laravel-mix');

mix
  .js('src/js/theme.js', '')
  .js('src/js/custom.js', '')
  .js('src/js/ls-global.js', '')
  .js('src/js/ls-customers.js', '')
  .sass('src/scss/theme.scss', '')
  .setPublicPath('theme/assets');
