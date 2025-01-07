import { Equal, Expect } from "../helper";
//array에서 object indexing
const rgb = ["red", "green", "blue"] as const;

type RedAndBlue = (typeof rgb)[0 | 1];
//모든 타입 추론 가능
type RGB = (typeof rgb)[number];

type tests = [
  Expect<Equal<RedAndBlue, "red" | "green">>,
  Expect<Equal<RGB, "red" | "green" | "blue">>
];
