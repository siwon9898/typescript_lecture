type Path = `/${string}`;

export function makeUrl(path: Path) {
  return `https://mywebsite.com${path}`;
}

//Path타입으로는 /가 무조건 앞에 와야함
makeUrl("/users");

makeUrl("/users/1");
