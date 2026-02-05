function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", "test");
pair("masala", 30);
pair("masala", { flavor: "Ginger" });
// Kahi baar bohot saar data lene ke liye Generics(General function) kitna ham generalise kar sakte h banya
// jata h

// =============================================================================================

// Generic interface

interface Box<T> {
  content: T;
}

const numberBox: Box<number> = { content: 10 };
const numberBoxCup: Box<string> = { content: "10" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const response: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: "masala" },
};
