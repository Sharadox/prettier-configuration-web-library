# @sharadox/prettier-configuration-web-library

The shared [Prettier](https://prettier.io) configuration of every Sharadox project: Prettier's defaults with 120-character lines.

## Install

```sh
pnpm add -D prettier @sharadox/prettier-configuration-web-library
```

## Use

```js
// prettier.config.mjs
export { configuration as default } from "@sharadox/prettier-configuration-web-library/configuration";
```

To change something for one project, spread it:

```js
import { configuration } from "@sharadox/prettier-configuration-web-library/configuration";

export default { ...configuration, singleQuote: true };
```

## API

| Import                                                       | Export          | Value                                       |
| ------------------------------------------------------------ | --------------- | ------------------------------------------- |
| `@sharadox/prettier-configuration-web-library/configuration` | `configuration` | `{ printWidth: 120 }` (a Prettier `Config`) |

## Develop

`pnpm verify` runs formatting, lint, type-check, tests with 100% coverage and the build. Branches follow `<feature>.development` → `development` → `index`, and releases are `v<version>` tags on `index`.

## Licence

Licença Sharadox de Código Aberto, versão 0.1.0. See [português](LICENCA.md) (the binding text) and the [English translation](LICENSE.md).
