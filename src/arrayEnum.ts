// Array of string
const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 5.0];

// Array of objects
type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "adrak", price: 16 },
];

const cities: readonly string[] = ["Delhi", "Jaipur"];

// cities.push("Pune"); // can you not push to readonly

///// Multidimensional Array ///////
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [29,"Masala"] // wrong

let userInfo: [string, number, boolean?]; // boolean is optional

userInfo = ["hitesh", 100];
userInfo = ["hitesh", 100, true];

// Readonly TUPLE
const location: readonly [number, number] = [28.66, 32.45];

// Named tuple
const chaiItems: [name: string, price: number] = ["Masala", 25];

// Enum topic
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, // 101 (automatically increases)
  CANCELLED, // 102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making : ${type}`);
}

makeChai(ChaiType.GINGER);
// makeChai("masala")

enum RandomEnum {
  // usually in enum we prefer only one datatype mix is allowed but this are the "STANDARDS"
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

// const s = Sugars.HIGH;

let t: [string, number] = ["chai", 10];
t.push("extra");
