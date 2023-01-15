import {
  assertInstanceOf,
  assertStrictEquals,
} from "@deno-std/testing/asserts.ts";
import { describe, it } from "@deno-std/testing/bdd.ts";
import { type ConstructorWithParameters } from "@src/shared/types.ts";
import { makeSingleton } from "./singleton.ts";

interface SampleType {
  name: string;
}

describe("basic object", () => {
  const basicObjectFn = (name: string): SampleType => {
    return { name };
  };

  it("doesn't break object behavior", () => {
    const sample = makeSingleton(basicObjectFn);

    const obj1 = new sample("sample object 1");

    assertStrictEquals(obj1.name, "sample object 1");
    assertInstanceOf(obj1, Object);
  });

  it("creates an object on demand", () => {
    const sample = makeSingleton(basicObjectFn);

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj.name, undefined);
    assertInstanceOf(singletonObj, Object);
  });

  it("gets first created instance", () => {
    const sample = makeSingleton(basicObjectFn);

    const obj1 = new sample("sample object 1");
    const _obj2 = new sample("sample object 2");

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj, obj1);
  });
});

describe("prototype object", () => {
  // @ts-ignore TS2322
  const prototypeObjectFn: ConstructorWithParameters<SampleType> = function (
    this: SampleType,
    name: string,
  ) {
    this.name = name;
  };

  it("doesn't break object behavior", () => {
    const sample = makeSingleton(prototypeObjectFn);

    const obj1 = new sample("sample object 1");

    assertStrictEquals(obj1.name, "sample object 1");
    assertInstanceOf(obj1, prototypeObjectFn);
  });

  it("creates an object on demand", () => {
    const sample = makeSingleton(prototypeObjectFn);

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj.name, undefined);
    assertInstanceOf(singletonObj, prototypeObjectFn);
  });

  it("gets first created instance", () => {
    const sample = makeSingleton(prototypeObjectFn);

    const obj1 = new sample("sample object 1");
    const _obj2 = new sample("sample object 1");

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj, obj1);
  });
});

describe("class object", () => {
  class ClassObject implements SampleType {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  it("doesn't break object behavior", () => {
    const sample = makeSingleton(ClassObject);

    const obj1 = new sample("sample object 1");

    assertStrictEquals(obj1.name, "sample object 1");
    assertInstanceOf(obj1, ClassObject);
  });

  it("creates an object on demand", () => {
    const sample = makeSingleton(ClassObject);

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj.name, undefined);
    assertInstanceOf(singletonObj, ClassObject);
  });

  it("gets first created instance", () => {
    const sample = makeSingleton(ClassObject);

    const obj1 = new sample("sample object 1");
    const _obj2 = new sample("sample object 1");

    const singletonObj = sample.instance();

    assertStrictEquals(singletonObj, obj1);
  });
});
