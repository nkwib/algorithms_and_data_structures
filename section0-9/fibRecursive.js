const fibRes = [0, 1, 1];

function fib(pos) {
  if (fibRes[pos]) return fibRes[pos];
  else fibRes[pos] = fib(pos - 1) + fib(pos - 2);
  return fibRes[pos];
}

console.log(fib(1900));
