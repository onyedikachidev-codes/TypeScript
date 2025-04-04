class Player {
  readonly first: string;
  readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const elton2 = new Player("elton", "steele");

//-------------------OR---------------------

class Player2 {
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0
  ) {}

  private secretMethod(): void {
    console.log("Secret!!!");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore > 0) throw new Error("Score cannot be negative");
    this._score = newScore;
  }
}

const elton3 = new Player2("elton", "steele", 45);

class SuperClass extends Player2 {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

//CLASSES IMPLEMENTING INTERFACES
interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful {
  constructor(public brand: string, public color: string) {}
}

//ABSTRACT CLASSES
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
}

class FulltimeEmployee extends Employee {
  getPay(): number {
    return 13;
  }
}

class ParttimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
