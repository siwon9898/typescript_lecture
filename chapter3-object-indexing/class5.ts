import { Equal, Expect } from "../helper";

//Objecdt value의 타입을 union으로 변경
export const Color = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

//key를 일일히 입력하지 않아도 keyof 로 자동 참조 가능
type RedGreenBlueValue = (typeof Color)[keyof typeof Color];

type tests = [Expect<Equal<RedGreenBlueValue, "red" | "blue" | "green">>];
