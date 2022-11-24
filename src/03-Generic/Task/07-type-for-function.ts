export function createMap<T>(list: T[]) {
  return function <U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el));
    }

    return result;
  };
}

const mapNum = createMap([1, 2, 3]);
const res = mapNum((num) => num + 2);
