// //Generic Interface

// interface CrushInterface<T, U = null> {
//     name: string;
//     husband: T;
//     wife?: U
// }

// const crush3: CrushInterface<boolean, string> = {
//     name: 'Kate Winslate',
//     husband: true
// }
// const crush4: CrushInterface<string> = {
//     name: 'Kate Winslate',
//     husband: "Persian"
// }

// interface PersonInterface {name: string; age: number}
// const crush5: CrushInterface<PersonInterface, PersonInterface> = {
//     name: "Kate",
//     husband: {
//         name: "Persian",
//         age: 30
//     },
//     wife: {
//         name: "Winslet",
//         age: 40
//     }
// }








// type GenericTuple<X, Y> = [X,Y];

// type GenericArray<T> = Array<T>;

// const relation: GenericTuple<string,string> = ['Persian', 'Kane Witlet'];

// const rollNumbers:GenericArray<number>=[44,12,4];
// const rollNumbers3:Array<string>=["44", "12", "4"];
// const rollNumbers4:Array<boolean>=[true, false, true];

// type NameRollType = {name: string; roll: number};

// const userNameAndRollNumbers: Array<NameRollType>=[
//     {
//         name: "Mr. X",
//         roll: 1
//     },
//     {
//         name: "Mr. Y",
//         roll: 2
//     },
//     {
//         name: "Mr. Z",
//         roll: 3
//     },
// ]

// interface relationWithSalaryInterface {
//     name:string, 
//     salary:number
// };



