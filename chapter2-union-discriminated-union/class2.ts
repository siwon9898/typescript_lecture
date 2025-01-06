//discriminated union에 extract활용
import { Equal, Expect } from "../helper";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

//type 이 click인 type을 뽑아냄
type ClickEvent = Extract<Event, { type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];

//exclude 활용
export type Event2 =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

//type이 keydown인 type을 제외함
type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

type tests2 = [
  Expect<
    Equal<
      NonKeyDownEvents,
      | { type: "click"; event: MouseEvent }
      | { type: "focus"; event: FocusEvent }
    >
  >
];
