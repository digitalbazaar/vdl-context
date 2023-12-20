# VDL context _(vdl-context)_

[![Build status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/vdl-context/main.yaml)](https://github.com/digitalbazaar/vdl-context/actions/workflow/main.yaml)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/vdl-context.svg)](https://npm.im/@digitalbazaar/vdl-context)

> VDL context for JSON-LD.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Status](#status)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* https://w3c-ccg.github.io/vdl-vocab/
* https://github.com/w3c-ccg/vdl-vocab

## Install

- Requires Node.js 18+

To install via NPM:

```
npm install @digitalbazaar/vdl-context
```

## Usage

```js
// ESM
import {
  CONTEXT,
  CONTEXT_URL,
  constants,
  context
} from '@digitalbazaar/vdl-context';

// CommonJS
const ctx = require('@digitalbazaar/vdl-context');
const {
  CONTEXT,
  CONTEXT_URL,
  constants,
  context
} = ctx;

// Default context URL
CONTEXT_URL
// -> 'https://w3id.org/vdl/v1'

// Default context data
CONTEXT
// -> full context object

// Codec term map value for CBOR-LD
constants.CBORLD_VALUE
// -> 0x00

// get context data for a specific context
const data = contexts.get('https://w3id.org/vdl/v1');
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`: Default context URL.
- `CONTEXT`: Default context data.
- `CBORLD_VALUE`: Default codec term map value for [CBOR-LD][].
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps all context URLs to full context data.
- `appContextMap`: For use with the [cborld][] library.

## Status

- `https://w3id.org/vdl/v1`: Under development. Not stable.

## Developing

Source is available at:
- https://github.com/digitalbazaar/vdl-context

**WARNING**: The `.jsonld` in `contexts/` is auto-generated by the `npm run build` script,
each time you run the test suite.

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[CBOR-LD]: https://digitalbazaar.github.io/cbor-ld-spec/
[cborld]: https://github.com/digitalbazaar/cborld
[webpack]: https://webpack.js.org
