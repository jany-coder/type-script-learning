type CrushType = {
    name:string;
    age?:number;
    profession:string;
    address:string
}


const crush1:CrushType = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: "Uganda"
} 

const crush2:CrushType = {
    name: "Tiya Pakhi",
    profession: "Web Developer",
    address: "Mexico"
} 

type CrushMarried = boolean;
const isCrushMarride: CrushMarried = false; 


type OperationType = (x:number, y:number) => number;
const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);