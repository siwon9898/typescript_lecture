//Object key의 타입 변형
import { Equal, Expect } from "../helper";

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

//as 를 붙히면 key변형 가능, Capitalize를 사용하면 앞글자만 대문자 가능
type AttributeGetters = {
  [k in keyof Attributes as `get${Capitalize<k>}`]: () => Attributes[k];
};

type tests = [
  Expect<
    Equal<
      AttributeGetters,
      {
        getFirstName: () => string;
        getLastName: () => string;
        getAge: () => number;
      }
    >
  >
];
