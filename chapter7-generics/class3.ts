const obj: Record<string, any> = {};
// @ts-expect-error
const shouldBeRecordType = <T>(t: T) => obj[t]; // // Error!

//t에 들어올수 있는 타입을 string으로 제한
const shouldBeRecordTypeSolution = <T extends string>(t: T) => obj[t];
const shouldBeRecordTypeSolution2 = (t: string) => obj[t];

shouldBeRecordTypeSolution("hello");
// @ts-expect-error
shouldBeRecordTypeSolution(2);

// 위의 예제에서 obj 의 Key로 넘길 수 있는 타입은 제한되어있는데 shouldBeRecordType 같은 함수를 생성하게 되면 t가 obj의 Key 타입이 될 수 없다는 에러가 발생한다.
// obj 같은 타입은 반드시 Key에는 string | number | symbol 타입만 올 수 있는데 그러기 위해선 T의 타입 범위를 제한하면 문제를 해결할 수 있다.

// 이걸 그림으로 표현하면, 아래와 같다.
// T라는 타입변수에 Object, number, symbol과 같이 다양한 타입들이 입력될 수 있는데 string 으로 제한하게 되면 string 내부에 속하는 집합들만 타입변수로 넘길 수 있다.
