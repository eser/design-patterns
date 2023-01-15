import { assertEquals } from "@deno-std/testing/asserts.ts";
import { describe, it } from "@deno-std/testing/bdd.ts";
import { add } from "./main.ts";
import { subtract } from "./main.ts";
import { divide } from "./main.ts";
import { multiply } from "./main.ts";

describe("add", () => {
  it("basic", () => {
    assertEquals(add(2, 3), 5);
  });
});

describe("subtract", () => {
  it("basic", () => {
    assertEquals(subtract(2, 3), 5);
  });
});

describe("divide", () => {
  it("basic", () => {
    assertEquals(divide(2, 3), 5);
  });
});

describe("multiply", () => {
  it("basic", () => {
    assertEquals(multiply(2, 3), 5);
  });
});


