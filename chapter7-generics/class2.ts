import { Equal, Expect } from "../helper";

//<T> : 타입을 받을수 있는 인자
const returnWhatIPassIn = <T>(t: T) => {
  return t;
};

const one = returnWhatIPassIn(1);
const matt = returnWhatIPassIn("matt");

type tests = [Expect<Equal<typeof one, 1>>, Expect<Equal<typeof matt, "matt">>];
//one은 number로 추론되지 않고 1로 추론됨, matt는 string으로 추론되지않고 'matt'으로 추론됨
