import { Equal, Expect } from "../helper";

//하나를 넘겨도 잘 동작하게
// = undefined를 사용하면 두번째 인자 없을 경우 undefined 타입으로 처리됨
type CreateDataShape<TData, TError = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
