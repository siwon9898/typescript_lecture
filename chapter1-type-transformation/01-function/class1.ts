import { Equal, Expect } from "../../helper";

//00. ReturnType
const myFunc = () => {
  return "hello";
};

//myFunc 의 return type이 변경되더라도 유연하게 대응
//ReturnType 의 파라미터에 typeof 꼭 붙혀줘야함
type myFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<myFuncReturn, string>>];

//01. Parameters
function func(foo: string, obj: { bar: number; bas: boolean }) {}

function myFunction(
  param1: string,
  param2: number,
  param3: { foo: string; bar: number }
) {}

type MyFuncParams = Parameters<typeof myFunction>;
//myFunctionParams 타입 :
// [ param1: string,
//   param2: number,
//   param3: { foo: string; bar: number }]

type tests2 = [
  Expect<
    Equal<
      MyFuncParams,
      [param1: string, param2: number, param3: { foo: string; bar: number }]
    >
  >
];

//func의 파라미터 타입을 가져옴
type FuncParameters = Parameters<typeof func>;

type StringArray = string[]; // array 타입 : 길이를 알 수 없음 (배열의 길이 유동적으로 변함)
type StringTuple = [string, string]; // tuple 타입 : 길이를 명시적으로 표시 (배열의 길이 정해져있음)

//02. Promise 를 반환하는 경우의 ReturnType
const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "jj@email.com",
  });
};

//Promise 타입일 경우 Awaited를 붙히면 return value 도출가능
type ReturnValue = Awaited<ReturnType<typeof getUser>>;
