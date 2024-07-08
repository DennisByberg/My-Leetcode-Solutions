import { describe, expect, it } from "vitest";
import { sleep } from "./sleep";

describe(sleep, () => {
  it("It should return a promise that resolves after 100ms", async () => {
    const start = Date.now();
    await sleep(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });

  it("It should return a promise that resolves after 200ms", async () => {
    const start = Date.now();
    await sleep(200);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(200);
  });
});
