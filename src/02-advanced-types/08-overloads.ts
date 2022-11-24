type AddTypes = number | string;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

type asyncCb = (res: number) => number;
function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const res = a + b;
  if (cb) {
    return cb(res);
  }
  return Promise.resolve(res);
}

asyncSum(2, 2);
