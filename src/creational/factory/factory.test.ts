import {
  assertInstanceOf,
  assertStrictEquals,
  assertThrows,
} from "@deno-std/testing/asserts.ts";
import { describe, it } from "@deno-std/testing/bdd.ts";
import {
  type FactoryClass,
  type FactoryFn,
  type FactoryItem,
} from "./factory.ts";

interface Product {
  name: string;
}

describe("functional", () => {
  // @ts-ignore TS2322
  const Book: FactoryItem<Product> = function (this: Product) {
    this.name = "a book";
  };

  // @ts-ignore TS2322
  const Movie: FactoryItem<Product> = function (this: Product) {
    this.name = "a movie";
  };

  const productFactory: FactoryFn<Product> = (name: string) => {
    if (name === "book") {
      return new Book();
    }

    if (name === "movie") {
      return new Movie();
    }

    throw new Error("Unknown product");
  };

  it("gets requested factory item", () => {
    const obj1 = productFactory("book");

    assertStrictEquals(obj1.name, "a book");
    assertInstanceOf(obj1, Book);
  });

  it("throws error on invalid name", () => {
    assertThrows(() => productFactory("casette"));
  });
});

describe("oop", () => {
  class Book implements Product {
    name: string;

    constructor() {
      this.name = "a book";
    }
  }

  class Movie implements Product {
    name: string;

    constructor() {
      this.name = "a movie";
    }
  }

  class ProductFactory implements FactoryClass<Product> {
    create(name: string): Product {
      if (name === "book") {
        return new Book();
      }

      if (name === "movie") {
        return new Movie();
      }

      throw new Error("Unknown product");
    }
  }

  it("gets requested factory item", () => {
    const factory = new ProductFactory();

    const obj1 = factory.create("book");

    assertStrictEquals(obj1.name, "a book");
    assertInstanceOf(obj1, Book);
  });

  it("throws error on invalid name", () => {
    const factory = new ProductFactory();

    assertThrows(() => factory.create("casette"));
  });
});
