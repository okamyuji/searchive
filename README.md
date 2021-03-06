# searchive

Search all my documents{PDF}.

## App

[searchive-app](./packages/searchive-app) is an Electron app.
This app include client and server.

[![App](https://media.giphy.com/media/3o6fIYo3aDtasisB2M/giphy.gif)](http://www.giphy.com/gifs/3o6fIYo3aDtasisB2M)

## Install

Install searchive app from [release page](https://github.com/azu/searchive/releases)

- Download from [Latest Release](https://github.com/azu/searchive/releases/latest)

### Usage

Launch by `yarn run app`.

    yarn install
    yarn run app

## Modules

This repository is a monorepo.

| Package | Version |
|---------|---------|
| [`pdf-to-json`](./packages/pdf-to-json) | [![npm](https://img.shields.io/npm/v/pdf-to-json.svg?style=flat-square)](https://www.npmjs.com/package/pdf-to-json)
| [`searchive-cli`](./packages/searchive-cli) | [![npm](https://img.shields.io/npm/v/searchive-cli.svg?style=flat-square)](https://www.npmjs.com/package/searchive-cli)
| [`searchive-client`](./packages/searchive-client) | [![npm](https://img.shields.io/npm/v/searchive-client.svg?style=flat-square)](https://www.npmjs.com/package/searchive-client)
| [`searchive-server`](./packages/searchive-server) | [![npm](https://img.shields.io/npm/v/searchive-server.svg?style=flat-square)](https://www.npmjs.com/package/searchive-server)
| [`searchive-web-api-interface`](./packages/searchive-web-api-interface) | [![npm](https://img.shields.io/npm/v/searchive-web-api-interface.svg?style=flat-square)](https://www.npmjs.com/package/searchive-web-api-interface)
| [`searchive-create-index`](./packages/searchive-create-index) | [![npm](https://img.shields.io/npm/v/searchive-create-index.svg?style=flat-square)](https://www.npmjs.com/package/searchive-create-index)

## Development

### Install in Development

    yarn install
    yarn run bootstrap

### Publish

Publish Searchive-app.
Need to create `.env` in [packages/searchive-app](packages/searchive-app) dir.

```
GH_TOKEN="XXXX"
```

And publish it.

    yarn run publish

## Changelog

See [Releases page](https://github.com/azu/searchive/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/searchive/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
