// //Json place holder
// interface Itodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }
// const getTodo = async () :Promise<Itodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json();

// }


// const getTodoData = async ():Promise<void> => {
//      const result = await getTodo();
//      console.log(result);
// }

// getTodoData();




// //Mocking

// // String type
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Fetched data";
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetched data");
//         }
//     });

// }


// //boolean type
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true;
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetched data");
//         }
//     });

// }

// type DataType = {
//     data: string
// }

// //object type
// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = { data: "data fetched" };
//         if (data) {
//             resolve(data);
//         } else {
//             reject("Failed to fetched data");
//         }
//     });

// }

// //string
// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }

// //boolean
// const getPromiseDataBoolean = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
//     return data;
// }


// //object
// const getPromiseDataObject = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
//     return data;
// }