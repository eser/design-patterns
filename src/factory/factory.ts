// deno-lint-ignore no-explicit-any
type FactoryFn<T> = (...params: any[]) => T;

interface FactoryClass<T> {
  create: FactoryFn<T>;
}

interface FactoryItem<T> {
  // deno-lint-ignore no-explicit-any
  new (...params: any[]): T;
}

export { type FactoryClass, type FactoryFn, type FactoryItem };
