let number: readonly number[] = [1, 2, 3];

number.push(1);
type readOnlyTuple = readonly [string, string, number];

type readOnlyPerson = readonly [string, string, number];
const person: readOnlyPerson = ["John", "Smith", 32];
type a = Readonly<string[]>;
//long form array of string declaration
type b = ReadonlyArray<string>;

type c = Readonly<[string, string, number]>;
