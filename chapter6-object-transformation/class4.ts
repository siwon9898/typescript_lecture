import { Equal, Expect } from "../helper";

//Objcet union을 object로 타입 변경경
type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

//object하나씩 순회하며 route value만 뽑아냄
type RoutesObject = {
  [k in Route as k["route"]]: k["search"];
};
type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >
];
