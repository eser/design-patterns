import { type FactoryFn, type FactoryItem } from "@src/factory/mod.ts";

interface Product {
  name: string;
}

// FIXME(@eser) TypeScript is broken here, since it says that signatures
//              are not matching

const Book: FactoryItem<Product> = function (this: Product) {
  this.name = "a book";
};

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

const main = (): void => {
  const book = productFactory("book");
  const movie = productFactory("movie");

  console.log(`${book.name} is created.`);
  console.log(`${movie.name} is created.`);
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { type Product, productFactory };
