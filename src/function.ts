//normal function
//default parameter  default value use only last parameter
function add(num1:number,num2:number =20):number {
    return num1+ num2;
}

add(2,2);

const addArrrow = (num1:number, num2:number):number => num1 + num2;

const arr=[1,4,5];
const newArray = arr.map((elem:number) => elem * elem);

const person:{
    name: string,
    balance: number,
    addBalance(money: number): number;
} = {
    name: 'Mezbah',
    balance: 5,
    addBalance(money:number) {
        return this.balance + money;
    }
}

//spread operator
const myFriends = ["chandler","joye","rose"];
const newFriends = ["monica", "rachel", "pheobe"];
const myBestFriends = {
    fullame: "Abul Bashar",
    age: 24
}

const [bestFriend] = myFriends;
const {fullame} = myBestFriends;

myFriends.push(...newFriends)

console.log(myFriends);

//rest operator
const greetFriends = (...friends:string[]):void => friends.forEach(friend => console.log(`Hi ${friend}`)) ;

greetFriends("Kashem", "Hashem", "lashem", "ja khushi ta");

//array destructuring