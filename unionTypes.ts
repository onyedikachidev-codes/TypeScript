const age: string | number = 34;

type numbers = {
  x: number;
  y: number;
};

type loc = {
  lat: number;
  lng: number;
};

let graph: loc | numbers = { x: 49, y: 58 };
graph = { lat: 35.34, lng: 56.36 };

function calculatePrice(price: string | number, tax: number): void {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  price * tax;
}

//ARRAY MULTIPLE TYPES
const myArray: (string | number)[] = [1, 2, 3, "a", "b"];

//LITERAL TYPES
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
