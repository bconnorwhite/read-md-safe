<div align="center">
  <h1>read-md-safe</h1>
  <a href="https://npmjs.com/package/read-md-safe">
    <img alt="NPM" src="https://img.shields.io/npm/v/read-md-safe.svg">
  </a>
  <a href="https://github.com/bconnorwhite/read-md-safe">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/read-md-safe.svg">
  </a>
  <a href='https://coveralls.io/github/bconnorwhite/read-md-safe?branch=master'>
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/read-md-safe.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/read-md-safe">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/read-md-safe?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Read markdown files as a [Marked](https://www.npmjs.com/package/marked) token list or string.

## Installation

```sh
yarn add read-md-safe
```

```sh
npm install read-md-safe
```

## API

### Types
```ts
import {
  readMarkdown,
  readMarkdownSync,
  readMarkdownString,
  readMarkdownStringSync,
  TokensList,
  Token
} from "write-file-safe";

function readMarkdown(path: string): Promise<TokensList | undefined>;

function readMarkdownSync(path: string): TokensList | undefined;

function readMarkdownString(path: string): Promise<string | undefined>;

function readMarkdownStringSync(path: string): string | undefined;

// a Marked token list
type TokensList = Token[] & {
  links: {
    [key: string]: {
      href: string | null;
      title: string | null;
    };
  };
}
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/read-md-safe.svg"></h2>

- [@types/marked](https://www.npmjs.com/package/@types/marked): TypeScript definitions for Marked
- [marked](https://www.npmjs.com/package/marked): A markdown parser built for speed
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch.

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/read-md-safe.svg"></h2>

- [@bconnorwhite/bob](https://www.npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [@types/mock-fs](https://www.npmjs.com/package/@types/mock-fs): TypeScript definitions for mock-fs
- [mock-fs](https://www.npmjs.com/package/mock-fs): A configurable mock file system.  You know, for testing.

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/read-md-safe.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)

<br />

## Related Packages:

- [marked](https://www.npmjs.com/package/marked): A markdown parser built for speed
- [write-md-safe](https://npmjs.com/package/read-md-safe): Write markdown files from a Marked token list or string.
- [read-file-safe](https://www.npmjs.com/package/read-file-safe): Read files without try catch.
