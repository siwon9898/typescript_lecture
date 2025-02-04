const intFunction = (i: number) => i;
const stringFunction = (str: string) => str;
const objFunction = (obj: Record<any, any>) => obj;
const boolFunction = (bool: boolean) => bool;

//위 함수를 하나로 합칠수 있음음
const genericFunction = <T>(arg: T) => arg;

const result = genericFunction<number>(1);
