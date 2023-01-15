import {
  type ConstructorWithParameters,
  type FunctionWithParameters,
} from "./types.ts";

const createInstance = <T>(
  constructor: FunctionWithParameters<T> | ConstructorWithParameters<T>,
  // deno-lint-ignore no-explicit-any
  ...params: any[]
): T => {
  if (constructor.prototype === undefined) {
    return (constructor as FunctionWithParameters<T>)(...params);
  }

  return new (constructor as ConstructorWithParameters<T>)(...params);
};

export { createInstance };
