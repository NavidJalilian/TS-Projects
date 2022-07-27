function arrayGeneric<T extends (string | number)[]>(arg: T): Array<T> {
  if (arg.find((x) => x === "a")) {
    return arg;
  } else return [];
}

arrayGeneric(["a", "b", "c"]);
