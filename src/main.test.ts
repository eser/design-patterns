import { assertEquals } from "@deno-std/testing/asserts.ts";
import { describe, it } from "@deno-std/testing/bdd.ts";
import { add } from "./main.ts";

describe("add", () => {
  it("basic", () => {
    assertEquals(add(2, 3), 5);
  });
});
