import { format } from "prettier";
import { describe, expect, test } from "vitest";
import { configuration } from "@sharadox/prettier-configuration-web-library/configuration";

describe("configuration", () => {
  test("allows 120 characters per line", () => {
    expect(configuration).toEqual({ printWidth: 120 });
  });

  test("keeps a 120-character line whole and wraps a longer one", async () => {
    const fits = `const value = [${Array.from({ length: 20 }, (_, index) => index).join(", ")}];\n`;
    expect(fits.length).toBeLessThanOrEqual(121);
    expect(await format(fits, { ...configuration, parser: "typescript" })).toBe(fits);
    const tooLong = `const value = [${Array.from({ length: 40 }, (_, index) => index).join(", ")}];\n`;
    expect((await format(tooLong, { ...configuration, parser: "typescript" })).split("\n").length).toBeGreaterThan(2);
  });
});
