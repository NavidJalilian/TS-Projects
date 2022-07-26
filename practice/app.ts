type Input = number | string;

function generic<T extends Input>(value: Input): Input {
  if (typeof value === "string") return value ;
  else return value * 10;
}
console.log(generic(5));
