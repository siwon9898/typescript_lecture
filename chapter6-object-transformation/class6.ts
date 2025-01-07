import { Equal, Expect } from "../helper";

//Object key, value를 string union으로 변형
interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
}[keyof FruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
