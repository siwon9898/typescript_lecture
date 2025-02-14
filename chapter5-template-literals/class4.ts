import { Equal, Expect } from "../helper";

//반복되는 패턴을 정의

type First = "user" | "post" | "comment";
type Second = "Id" | "Name";

type ObjectOfKeys = Record<`${First}${Second}`, string>;

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string;
        userName: string;
        postId: string;
        postName: string;
        commentId: string;
        commentName: string;
      }
    >
  >
];
