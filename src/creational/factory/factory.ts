import {
  type ConstructorWithParameters,
  type FunctionWithParameters,
} from "@src/shared/types.ts";

type FactoryFn<T> = FunctionWithParameters<T>;

interface FactoryClass<T> {
  create: FactoryFn<T>;
}

type FactoryItem<T> = ConstructorWithParameters<T>;

export { type FactoryClass, type FactoryFn, type FactoryItem };
