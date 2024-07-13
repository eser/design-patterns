import { assertStrictEquals } from "@deno-std/testing/asserts.ts";
import { describe, it } from "@deno-std/testing/bdd.ts";
import { Composite, Leaf } from "@src/structural/composite.ts";

describe("Composite Pattern", () => {
    it("Leaf operations", () => {
        const leaf = new Leaf("1");
        assertStrictEquals(leaf.operation(), "Leaf 1");
    });

    it("Composite operations", () => {
        const leaf1 = new Leaf("1");
        const leaf2 = new Leaf("2");

        const composite = new Composite();
        composite.add(leaf1);
        composite.add(leaf2);

        assertStrictEquals(
            composite.operation(),
            "Composite [ Leaf 1, Leaf 2 ]",
        );
    });
});
