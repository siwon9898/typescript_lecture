import { Equal, Expect } from "../helper";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

//정답~~
type AttributeGetters = { [k in keyof Attributes]: () => Attributes[k] };

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        firstName: () => string;
        lastName: () => string;
        age: () => number;
      }
    >
  >
];
