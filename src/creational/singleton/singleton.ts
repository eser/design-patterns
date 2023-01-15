import {
  type ConstructorWithParameters,
  type FunctionWithParameters,
} from "@src/shared/types.ts";
import { createInstance } from "@src/shared/create-instance.ts";

type SingletonFunction<T> = FunctionWithParameters<T>;
type SingletonConstructor<T> = ConstructorWithParameters<T>;

interface Singleton<T> extends ConstructorWithParameters<T> {
  instance: () => T;
}

const makeSingleton = <T>(
  constructor: SingletonFunction<T> | SingletonConstructor<T>,
): Singleton<T> => {
  let instance: T;

  // FIXME(@eser) TypeScript is broken here, since it says that signatures
  //              are not matching

  // @ts-ignore TS2322
  // deno-lint-ignore no-explicit-any
  const singleton: Singleton<T> = function (...params: any[]): T {
    const newInstance = createInstance(constructor, ...params);
    instance ??= newInstance;

    return newInstance;
  };

  singleton.instance = () => {
    if (instance === undefined) {
      instance = new singleton();
    }

    return instance;
  };

  return singleton;
};

export {
  makeSingleton,
  type Singleton,
  type SingletonConstructor,
  type SingletonFunction,
};
