# Build Commands

All build commands are executed via [NPM Scripts](https://docs.npmjs.com/misc/scripts).

### `npm run dev`

> Starts a Node.js local development server. See [API Proxying During Development](proxy.md) for more details.

- Webpack + `vue-loader` for single file Vue components.
- State preserving hot-reload
- State preserving compilation error overlay
- Lint-on-save with ESLint
- Source maps

### `npm run build`

> Build assets for production. See [Integrating with Backend Framework](backend.md) for more details.

- JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
- HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
- CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
- All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

### `npm run unit`

> Run Unit tests with [Jest](https://facebook.github.io/jest/) 
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.

### `npm run e2e`

> Runs End-to-end tests with [Jest](https://facebook.github.io/jest/) +  [Navalia](https://github.com/joelgriffith/navalia).
