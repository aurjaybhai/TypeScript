function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order : ${kind}`;
}

function serviceChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `chai order #${size}`;
}

class KhulhadChai {
  serve() {
    return `Serving Khulad Chai`;
  }
}

class Cutting {
  serve() {
    return `Serving cutting Chai`;
  }
}

function serve(chai: KhulhadChai | Cutting) {
  if (chai instanceof KhulhadChai) {
    return chai.serve();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai : ${item}`;
}

type MasalaChai = {
  type: "masala";
  spicelevel: number;
};
type GingerChai = {
  type: "ginger";
  spicelevel: number;
};
type ElaichiChai = {
  type: "elaichi";
  spicelevel: number;
};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return `Masala Chai`;
      break;
    case "elaichi":
      return `Elaichi Chai`;
      break;
    case "ginger":
      return `Ginger Chai`;
      break;
  }
}

function brew(order: MasalaChai | GingerChai) {
  if ("spicelevel" in order) {
    //
  }
}

// function isStringArray(arr: unknown): arr is string[] {
//   // return Array.isArray(arr) && arr.every((item) => typeof item === "string");
// }
