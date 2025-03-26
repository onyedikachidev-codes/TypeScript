interface Coordinate {
  x: number;
  y: number;
}

const cood: Coordinate = { x: 34, y: 324 };

interface Person {
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const declan: Person = {
  first: "Declan",
  last: "Rice",
  nickname: "The Horse",
  sayHi: () => {
    return "Hello";
  },
};

interface Products {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const laptopStand: Products = {
  name: "Laptop Stand",
  price: 7000,
  applyDiscount(discount: number) {
    return 2;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 1,
  breed: "Australia Shepherd",
  bark() {
    return "Woof Woof!!";
  },
};

interface ServiceDog extends Dog {
  job: "Drug Sniffer" | "Guide Dog";
}

const luna: ServiceDog = {
  name: "Luna",
  age: 4,
  breed: "Golden Retriever",
  bark: () => {
    return "I don catch you!!😂";
  },
  job: "Drug Sniffer",
};

interface Footballer {
  name: string;
  readonly club: string;
}

interface Club {
  shirtNum: number;
}

interface Salary extends Footballer, Club {
  salary: number;
}

const pepe: Salary = {
  name: "Nicolas Pepe",
  club: "Villareal",
  shirtNum: 17,
  salary: 129,
};
