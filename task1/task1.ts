function add(a: number, b: number) {
    return a + b;
   }
   function addTwo(f: (a : number, b: number) => number, a: number) {
       return f(a,2);
   }
   console.log(addTwo(add,2));