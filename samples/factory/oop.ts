import { type FactoryClass } from "@src/factory/mod.ts";

interface Product {
  name: string;
}

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

const main = (): void => {
  const factory = new ProductFactory();
  const book = factory.create("book");
  const movie = factory.create("movie");

  console.log(`${book.name} is created.`);
  console.log(`${movie.name} is created.`);
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { type Product, ProductFactory };
