// const crush = 'Kate Winslate'
// const myInfo = {
//     name: 'Persian',
//     age: 100,
//     salary: 100000
// };


type MyInfoType = {
    name: string;
    age: number;
    salary: number;
    house: boolean
}

const myInfo: MyInfoType = {
    name: "Persian",
    age: 100,
    salary: 100000,
    house: false
}

type MandatoryTypes = {name:string, age:number, salary:number}
const addMeInMyCrushMind = <T extends MandatoryTypes>(myInfo: T) => {
    const crush = "Kate Winslate";
    const newData= {...myInfo, crush}
    return newData;
}

const result5 = addMeInMyCrushMind(myInfo);