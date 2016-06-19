import {WebpackConfig, get} from '@easy-webpack/core'
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Generates an index.html from a template
 * See: https://github.com/ampedandwired/html-webpack-plugin
 */
export function generateIndexHtml(minify = true) {
  return function generateIndexHtml(this: WebpackConfig): WebpackConfig {
    return {
      plugins: [
        /**
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
          template: 'index.html',
          chunksSortMode: 'dependency',
          minify: minify ? {
            removeComments: true,
            collapseWhitespace: true
          } : undefined
        }),
      ].concat(get(this, 'plugins', []))
    }
  }
}