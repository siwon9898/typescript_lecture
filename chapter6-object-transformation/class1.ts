import { Equal, Expect } from "../helper";

type Route = "/" | "/about" | "/admin" | "/admin/users";

//in : value space에서의 for문
type RoutesObject = {
  [K in Route]: K;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >
];
