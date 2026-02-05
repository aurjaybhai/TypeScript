let response: any = "43";

let numericLength: number = (response as string).length; // Forceful type assercation
// it does not convert string to number like this like "javascript" (for interview purpose) ==> Number("43")
// let numericLength: number = response.length;

type Book = {
  name: string;
};

let bookString = '{"name" : "who moved my cheese"}'; // suppose this data came from storage so we did
// JSON.parse
let bookObject = JSON.parse(bookString) as Book;
// NOW HOW will you get to know that it's data type is from
// Book so you need to forcefully think them as Book
console.log(bookObject.name);

// this is called type assercation (matlab aap karwelre h ush assercation koh)
const inputElement = document.getElementById("username") as HTMLInputElement;

// ===============================================================================
// any vs unknown

let value: any;

value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;
// newValue.toUpperCase(); // you get here error in the editor itself bcoz of unknown
// you have to define the value to apply the uppercase

// so you can assign any values like any but while calling or using properties you have do this
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

const data: unknown = "chai aur code";
// const strData: string = data  // this will create a problem so we tell him that it's a string
const strData: string = data as string;

// Void ==> matlab meh kuch return nahi karuga jo bhi value meh return karoga
// I don't care about it

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }

  role; // (parameter) role:never ,///when there is no extra role but as soon as one extra role gets added
  //   it shows up
}

function neverReturn(): never {
  // web server are the infinte running loop
  while (true) {}
}
