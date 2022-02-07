type Length<Arr extends unknown[]> = Arr["length"];
type one = Length<[unknown]>;

type StructureArr<
  N extends number = 0,
  ANS extends any[] = []
> = Length<ANS> extends N ? ANS : StructureArr<N, [...ANS, any]>;

type two = Length<StructureArr<2>>;

type TypeNumber<N extends number = 0> = Length<StructureArr<N>>;

type thrid = TypeNumber<3>;

type ConcatArr<Arr1 extends unknown[], Arr2 extends unknown[]> = [
  ...Arr1,
  ...Arr2
];

type a = ConcatArr<[any], [any]>;

type AddNumber<A extends number = 0, B extends number = 0> = Length<
  ConcatArr<StructureArr<A>, StructureArr<B>>
>;
type ele = AddNumber<6, 5>;
type MinusArr<A extends unknown[] = [], B extends unknown[] = []> = A extends [
  B,
  ...infer U
]
  ? U
  : unknown[];
type b = MinusArr<[any, any, any], [any]>;
type MinusNumber<A extends number = 0, B extends number = 0> = Length<
  MinusArr<StructureArr<A>, StructureArr<B>>
>;
type ten = MinusNumber<10, 1>;
type four = AddNumber<two, two>;

type Fibonacci<N extends number = 0> = N extends 1
  ? 1
  : N extends 2
  ? 1
  : AddNumber<Fibonacci<MinusNumber<N, one>>, Fibonacci<MinusNumber<N, two>>>;

type fib8 = Fibonacci<5>;
type Length<Array extends unknown[]> = Array["length"];
type one = Length<[unknown]>;

type StructureArr<
  N extends number = 0,
  ANS extends any[] = []
> = Length<ANS> extends N ? ANS : StructureArr<N, [...ANS, any]>;

type two = Length<StructureArr<2>>;

type TypeNumber<N extends number = 0> = Length<StructureArr<N>>;

type thrid = TypeNumber<3>;

type ConcatArr<Arr1 extends unknown[], Arr2 extends unknown[]> = [
  ...Arr1,
  ...Arr2
];

type a = ConcatArr<[any], [any]>;

type AddNumber<A extends number = 0, B extends number = 0> = Length<
  ConcatArr<StructureArr<A>, StructureArr<B>>
>;
type ele = AddNumber<6, 5>;
type MinusArr<A extends unknown[] = [], B extends unknown[] = []> = A extends [
  B,
  ...infer U
]
  ? U
  : unknown[];
type b = MinusArr<[any, any, any], [any]>;
type MinusNumber<A extends number = 0, B extends number = 0> = Length<
  MinusArr<StructureArr<A>, StructureArr<B>>
>;
type ten = MinusNumber<10, 1>;
type four = AddNumber<two, two>;

type Fibonacci<N extends number = 0> = N extends 1
  ? 1
  : N extends 2
  ? 1
  : AddNumber<Fibonacci<MinusNumber<N, one>>, Fibonacci<MinusNumber<N, two>>>;

type fib8 = Fibonacci<5>;
