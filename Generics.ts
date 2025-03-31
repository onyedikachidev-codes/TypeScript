const nums: Array<number> = [23, 3, 634];
const text: Array<string> = ["generics", "works"];

const inputElement = document.querySelector<HTMLInputElement>("#blue")!;
inputElement.value = "Hahahhh";

function identity<Type>(item: Type): Type {
  return item;
}

function getRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

getRandomElement([1, 4, 5, 83]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(items: T): number {
  return items.length * 2;
}

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const numsss = makeEmptyArray();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  artist: string;
  resolution: number;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();
