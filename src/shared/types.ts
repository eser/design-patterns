// deno-lint-ignore no-explicit-any
type FunctionWithParameters<T> = (...params: any[]) => T;

type ConstructorWithParameters<T> = {
  // deno-lint-ignore no-explicit-any
  new (...params: any[]): T;
};

export { type ConstructorWithParameters, type FunctionWithParameters };
