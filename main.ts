type ArrayTypes=string | number;

function totalArray(array: ArrayTypes[]): number {
  return array.reduce((total:number, item) : number => {
    if (typeof item !== "number") return total;
    else total += item;
    return total;
  }, 0);
}

const filterdArray=totalArray(["sdjfsj",46,5,8]);

console.log(filterdArray);


