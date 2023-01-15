import { makeSingleton } from "@src/creational/singleton/mod.ts";

interface SampleType {
  name: string;
}

class SampleClass implements SampleType {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const Sample = makeSingleton(SampleClass);

const main = (): void => {
  const sample1 = new Sample("sample object 1");
  const sample2 = new Sample("sample object 2");

  console.log(sample1);
  console.log(sample2);
  console.log(Sample.instance());
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { Sample, type SampleType };
