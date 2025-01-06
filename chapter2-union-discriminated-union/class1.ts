//discriminated Union
//구성요소 하나는 고정, 나머지 데이터 구조는 같지 않을때
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
      d: string;
    };

//union
type B = "a" | "b" | "c";

//type이 모두 같아야 함
enum C {
  a = 0,
  b = 1,
  c = 2,
}

//예제
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

//discriminated union
type Shape = Square | Rectangle;

//하나의 함수에서 다양한 case처리 가능
function area(shape: Shape) {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.width;
  }
}
