import { Equal, Expect } from "../helper";

type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

//template literals를 사용해서 패턴으로 exclude
type DynamicRoutes = Extract<Routes, `/${string}/:id`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/products/:id">>];
