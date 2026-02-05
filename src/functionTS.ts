function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala_Chai", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null; // if order is not there then return null
  return;
}

// function orderChai(type?: string) {
//   // type is optional
//   //
// }

// another way to keep optional by setting a default value
function orderChai(type: string = "Masala") {
  //
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
