// // a type is dependent on another type

// type a1 = string;
// type a3 = undefined;
// type a4 = number;

// type a2 = a1 extends string ? string : null;

// //nested conditional type

// type d = a1 extends null 
// ? null 
// : a3 extends number 
// ? number 
// : a4 extends null 
// ? null 
// : never;

// type Sheikh = {
//     wife1: string;
//     wife2: string;
// }

// type Checkproperty<T, K> = K extends keyof Sheikh ? true:false;

// type CheckWife1= Checkproperty<Sheikh, "wife1">;

// //matha kharap example 

// type Bandhobi = 'Monika' | 'Rachel' | 'Pheobe';

// type RemoveBandhobi<T, U> = T extends U? never: T;

// type CurrentBandhobi = RemoveBandhobi<Bandhobi, 'Monika'>;
