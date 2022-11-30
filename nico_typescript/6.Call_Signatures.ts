function add(a: number, b: number) {
  return a + b;
}

const add2 = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number;

const add3: Add = (a, b) => a + b;
