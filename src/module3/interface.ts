type User = {
    name: string;
    age: number;
}

//Primitive data type er khetre amra type alias use korbo
//Interface use korbo shudhu matro object type er datar khetre

type extendedUser = User & {
    role: string
}




interface IUser {  
    name: string;
    age: number;
}

type rollNumber = number;

type addNumberType=(num1:number, num2:number)=> number;

// interface IAddNumbers {
//     (num1:number, num2: number): number;
// }
type rollNumbersType = number[];
interface IRollNumbers {
    [index:number]:number;
}
const rollNumbers1:IRollNumbers = [1,2,5];
const rollNumbers2:rollNumbersType = [1,2,5];

const addNumber:addNumberType = (num1, num2) => num1 + num2;

const userWithTypeAlias: User={
    name: 'Type alias',
    age: 100
}

interface IExtendedUser extends IUser {
    role: string;
}

const user1: IExtendedUser = {
    name: 'Omanush',
    age: 2000,
    role: "unknown"
}
// const userWithInterface: IUser= {
//     name: "Interface",
//     age: 200
// }