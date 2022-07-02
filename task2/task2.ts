import { compose, pipe } from "ramda";
const square = (x: number): number => {
  return x * x;
};
const multiplyByThree = (y: number): number => {
  return y * 3;
};
const composedRes = compose(square, multiplyByThree);
console.log(composedRes(2));
const pipedRes = pipe(square,multiplyByThree);
console.log(pipedRes(2))
// compose vs pipe:
// compose goes from right to left therefore in my example it multiplied 2*3 then squared the result
// pipe goes from left to right therefore in my example it squared the 2 first then multiplied by 3

const f = (x: number): number => {return x*x};
const g = (y: number): number => {return y*3};
const myCompose = (f: (x: number)=> number, g: (y: number)=> number, x: number): number => {return f(g(x))}
console.log(myCompose(f,g,2))
//In terms of usage in the HeyAuto repo, I have used the compose function to dispatch an action. For example, the compose would receive a dispatch as its 1st argument and the action as the 2nd argument. This way we compose both functions to dispatch the action!