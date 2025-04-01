function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

//TRUTHINESS GUARD
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log(word);
  }
};

//NARROWING WITH IN OPERATOR
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

//For anything with the new keyword
function printFullDate(date: String | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  }
  console.log(new Date().toUTCString());
}

//TYPE PREDICATE
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) return "Meow";
  return "Woof";
}

//DISCRIMINATED UNIONS
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Rooster | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cookadoodledoo";
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 34,
  age: 3,
  kind: "rooster",
};

getFarmAnimalSound(stevie);
