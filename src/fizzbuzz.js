export function checkNumber(n) {
  if (typeof n !== 'number') {
    throw new Error('El dato no es un número');
  }
 
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
 
  return String(n);
}
 
// Imprimir del 1 al 100
for (let i = 1; i <= 100; i++) {
  console.log(checkNumber(i));
}