import { Equal, Expect } from "../helper";

//object 뒤에 as const를 붙히면 enum과 같은 역할을 함 (enum으로 사용하면 enum 객체 명 참조해야함)
export const Color = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

enum ColorEnum {
  Red,
  Green,
  Blue,
}

type Red = (typeof Color)["Red"];
type Green = (typeof Color)["Green"];
type Blue = (typeof Color)["Blue"];

type tests = [
  Expect<Equal<Red, "red">>,
  Expect<Equal<Green, "green">>,
  Expect<Equal<Blue, "blue">>
];
