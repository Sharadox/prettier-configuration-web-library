import type { Config } from "prettier";

/**
 * The Sharadox Prettier configuration: Prettier's defaults with 120-character lines.
 *
 * @example
 * // prettier.config.mjs
 * export { configuration as default } from "@sharadox/prettier-configuration-web-library/configuration";
 */
export const configuration: Config = { printWidth: 120 };
