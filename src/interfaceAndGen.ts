interface Chai {
  flavor: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavor: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "chaiCode cafe" };
// s.id = 1

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

interface ChaiRatings {
  [flavor: string]: number;
}

const ratings: ChaiRatings = {
  masala: 4.5,
  ginger: 4.5,
};

interface User {
  // suppose this came from library
  name: string;
}

interface User {
  // This is created by me
  age: number;
}

// merging them both

const u: User = {
  name: "Rakesh",
  age: 42,
};

interface A {
  a: string;
}

interface B {
  b: string;
}

interface C extends A, B {}
