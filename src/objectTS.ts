const chai = {
  name: "masala chai",
  price: 20,
  isHot: true,
};

/*
{
  name: string;
  price: number;
  isHot: boolean;
}

    typescript behind scene infr karega
*/

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 25,
  isHot: true,
};

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 26,
  ingredients: ["ginger", "Green tea"],
};

type Cup = { size: string };
let smallCup: Cup = {
  size: "200ml",
};

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = { brewTime: number };

const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee; // iske andhar ham coffee ke values rakege

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "121",
};

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};

// like it makes all the types optional so you don't need to use all
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); // you can keep it empty also that can create problems

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

// filling all the values are mandatory bcoz we used required though in the source they are optional

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({
  name: "Masala Chai",
  quantity: 2,
});

type chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: false;
  secretIngredients: string;
};

type PublicChai = Omit<Chai, "secretIngredients">;
// omit is like secret type
