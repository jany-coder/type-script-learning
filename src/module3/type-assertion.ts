let emni:any;

emni = "Next level web development";

(emni as string).length;

function kgToGram(param:string|number):string | number | undefined{
    if(typeof param ==='string'){
        const value = parseFloat(param)*1000;
        return `The concerted result is: ${value} gram`;
    }
    if(typeof param === 'number') {
        const value = param*1000;
        return value;
    }
}

const resultToBeNumber = kgToGram(1000) as number; 
const resultToBeString = <string>kgToGram('1000'); //evabeo type declare kora jai

type CustomErrorType={
    message:string;
}
try{

}catch(err){
    console.log((err as CustomErrorType).message);
}
