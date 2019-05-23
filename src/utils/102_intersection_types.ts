function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {};
  for (const prop in first) {
    // console.log(111, prop);
    if (first.hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    // console.log(222, prop);
    if (second.hasOwnProperty(prop)) {
      (<Second>result)[prop] = second[prop];
    }
  }
  return <First & Second>result;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string) {
    console.log(`Hello, I'm ${name}.`);
  }
}

const person = new Person('Jim');
// console.log("person", person);

export const intersectionJim = extend(person, ConsoleLogger.prototype);
// export const intersectionJim = extend(person, {
//     log1: (name: string) => {
//         console.log(`Hello, I'm ${name}.`);
//     }
// });

// jim.log(jim.name);
