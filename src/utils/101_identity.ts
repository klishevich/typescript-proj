export function identity<T>(arg: T): T {
  return arg;
}

export function loggingIdentity<T>(arg: T[]): T[] {
  console.log(11, arg.length); // Error: T doesn't have .length
  return arg;
}

export function loggingIdentity2<T>(arg: Array<T>): Array<T> {
  console.log(12, arg.length); // Error: T doesn't have .length
  return arg;
}
