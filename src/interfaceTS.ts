type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

interface TeaRecipe {
  water: number;
  milk: number;
  // brew(): string; // Can also require methods
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

// type CupSize = "small" | "large";
interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = { ok: true } | { ok: false };

// class myResponse implements Response {
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type maslachai = BaseChai & Extra;

const cup: maslachai = {
  teaLeaves: 2,
  masala: 1,
};

// create optional options
type User = {
  username: string;
  bio?: string; // Optional
};

const u1: User = { username: "Rakesh" };
const u2: User = { username: "hitesh", bio: "hitesh.com" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Masterji",
  version: 1,
};

// cfg.appName = "Chai aur code"; // cannot edit read only values
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^***************************************************************************
// A class can only implement an object type or intersection of object types with statically known members
// ***********************************************************************************************************

// Very Important Note //

// // IMPLEMENTS - follows a contract
// type Recipe = { water: number };
// class Tea implements Recipe {
//   water = 100;  // Must define yourself
// }

// // EXTENDS - inherits from parent
// class Chai extends Tea {
//   // Automatically has water = 100 from parent!
//   spice = "cardamom";  // Add your own stuff
// }

//////////////////////////////////////////

// Visual Summary
/*
       TeaRecipe (Contract)
       ┌─────────────────┐
       │  water ✓        │  ← MINIMUM Requirements
       │  milk ✓         │
       └─────────────────┘
              │
              │ implements
              ▼
       MasalaChai (Class)
       ┌─────────────────┐
       │  water ✓        │  ← Required (from contract)
       │  milk ✓         │  ← Required (from contract)
       │─────────────────│
       │  spice          │  ← EXTRA (allowed!)
       │  sugarLevel     │  ← EXTRA (allowed!)
       │  prepare()      │  ← EXTRA (allowed!)
       └─────────────────┘



So when I said "TypeScript looks at the shape", I meant:

"TypeScript checks: Does this class have the same properties and methods that the interface/type requires?"





       */
