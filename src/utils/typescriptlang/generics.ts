export function identity<T>(arg: T): T {
    return arg;
}

export function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}

export function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}

// 19 April

// Type Definition - <T>(arg: T) => T
export const myIdentity: <T>(arg: T) => T = identity;
export const myIdentity2: (arg: string) => string = identity;
export const myIdentity3: <P>(arg: P) => P = identity;
// call signature of an object literal type
export const myIdentity4: { <T>(arg: T): T } = identity;

// Generic Interfaces
interface GenericIdentityFn {
    <T>(arg: T): T;
}
export const myIdentity5: GenericIdentityFn = identity;

// we may want to move the generic parameter to be a parameter of the whole interface
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
export const myIdentity6: GenericIdentityFn2<number> = identity;
