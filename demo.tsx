//VALID IN TSX
function getRandomElement2<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

//But for arrow functions you need a comma
const getRandomElement3 = <T,>(list: T[]): T => {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
};
