type UnaryFunction<A, B> = (_: A) => B;
type BinaryFunction<A, B, C> = (_1: A, _2: B) => C;

const partialApp = <A, B, C>(
  g: BinaryFunction<A, B, C>,
  a: A
): UnaryFunction<B, C> => {return(b:B): C => {
        return g(a,b)
}};