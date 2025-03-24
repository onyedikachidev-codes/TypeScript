function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Tessa" });
const singer = { first: "Thomas", last: "Tessa", age: 5890 };
printName(singer);

let coordinate: { x: number; y: number } = { x: 34, y: 10 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

type Song = {
  title: string;
  artists: string;
  numberOfStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numberOfStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artists}`);
}

//To make z optional

type Point = {
  x: number;
  y: number;
  z?: number;
};

const mypoint: Point = { x: 23, y: 43, z: 4 };

//READONLY KEYWORD IN TYPESCRIPT
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 3432,
  username: "Bisi",
};

//Intersection Types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Colorful & Circle;

const happyFace: ColorfulCircle = {
  color: "yellow",
  radius: 3447,
};
