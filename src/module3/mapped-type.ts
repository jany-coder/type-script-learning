const arrayofNumbers = [1,2,3];
const arrayofStrings = arrayofNumbers.map(number => number.toString());
console.log(arrayofStrings);

type Volume = {
    height: number;
    width: number;
    depth: number;
}


//Mapped type 
// type Area = {
//     [key in keyof Volume] : Volume[key];
// }
type Area<T> = {
    [key in keyof T] : T[key];
}

const area1 : Area<{height: number, width: number}> = {height: 12, width: 20}


type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
    readonly height: number;
    readonly width: number;
} 

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12,
}

// rectangularArea.width = 10;

// type A = AreaNumber['height']; //look up type
// type B = keyof AreaNumber; // 'width' | 'height