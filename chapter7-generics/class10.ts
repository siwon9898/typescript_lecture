//인자를 최소 1개는 갖고있는 array타입
type NonEmptyArray<T> = [T, ...Array<T>];
export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
