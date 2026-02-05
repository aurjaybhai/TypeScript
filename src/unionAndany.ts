let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error" = "pending";

apiRequestStatus = "success"; // you can only put three values (pending,success,error)

// apiRequestStatus = 'done' // you cannot assign "done"

let airlineSeat: "aisle" | "middle" | "window" = "aisle";

airlineSeat = "window";
// console.log(airlineSeat);

const orders = ["12", "14", "28", "42"];

let currentOrder: string | undefined; // we added an undefined bcoz currentOrder , what if condition
// is never true so remains unchanged so for safety purpose

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
  //   currentOrder = "11";
}

// currentOrder = 42; // sometime the variable annotate themselves as "ANY"

console.log(currentOrder);
