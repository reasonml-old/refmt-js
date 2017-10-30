# Deprecated

Reason now comes with a `refmt.js`! See https://github.com/facebook/reason/tree/31f68a2f24cc714d637bc31902993242df5b96a9#installation-for-programmatic-usage

## Installation

```
npm i refmt
```

## Usage

```js
const refmt = require('refmt')

const myReasonMLCode = fs.readFileSync('file.re')
const formattedCode = refmt(myReasonMLCode)
```

## API

#### `refmt(source: string, sourceLang: string?, sourceType: string?, targetLang: string?): string`

The `refmt` function will output styled ReasonML or OCaml source code. The only required param is
`source`, the input source code. `sourceLang` specifies the input language, defaulted to Reason.
Specify `'RE'` for Reason, or `'ML'` for OCaml input. `sourceType` specifies the source code type,
either `'implementation'` or `'interface'`, defaults to implementation. `targetLang` specifies the
output language, `'RE'` for Reason, or `'ML'` for OCaml, defaults to Reason.

## Source Maps

The distibution also includes a sourcemap for the compiled JS. To enable Node to use the provided source
map, please use [`source-map-support`](https://github.com/evanw/node-source-map-support).
