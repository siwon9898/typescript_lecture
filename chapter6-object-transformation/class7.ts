import { Equal, Expect } from "../helper";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

//key 에는 string, number,symbol만 가능하므로 k['name']으로 정해줌
type TransformedFruit = {
  [k in Fruit as k["name"]]: `${k["name"]}:${k["color"]}`;
}[Fruit["name"]];

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
