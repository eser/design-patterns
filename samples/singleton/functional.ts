import { makeSingleton } from "@src/creational/singleton/mod.ts";

interface SampleType {
  name: string;
}

// const sampleFn = (name: string): SampleType => {
//   return { name };
// };

const sampleFn = function (this: SampleType, name: string) {
  this.name = name;
};

const sample = makeSingleton(sampleFn);

const main = (): void => {
  const sample1 = new sample("sample object 1");
  const sample2 = new sample("sample object 2");

  console.log(sample1);
  console.log(sample2);
  console.log(sample.instance());
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  main();
}

export { sample, type SampleType };
