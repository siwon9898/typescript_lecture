import { Equal, Expect } from "../helper";

export const fakeDataDefaults = {
  foo: "bar",
  bar: 123,
  baz: true,
};

//value space를 type space로 변환하기위해 typeof
type FakeDataType = typeof fakeDataDefaults;

export type FooType = FakeDataType["foo"];
export type BarType = FakeDataType["bar"];
export type BazType = FakeDataType["baz"];

type tests = [
  Expect<Equal<FooType, string>>,
  Expect<Equal<BarType, number>>,
  Expect<Equal<BazType, boolean>>
];
