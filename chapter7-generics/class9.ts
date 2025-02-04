//null과 undefined는 들어가면 안됨
//value space에서의 {}는 빈 오브젝트를 의미하는것이 아님
//type space 에서 T extends {}는 null이나undefined를 제외함
export type Maybe<T extends {}> = T;

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">
];
