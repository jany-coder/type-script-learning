type NoobDeveloper = {
    name:string;
}

// type JuniorDeveloper = {
//     name:string,
//     experties: string;
//     experience: number;
// }

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadership: number;
    level: "junior" | "mid" | "senior"
}
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Moznu Mia',
    expertise: 'Javascript',
    experience: 1,
}

const developer: NextLevelDeveloper = {
    name: 'Next Bhai',
    expertise: 'Typescript',
    experience: 2,
    leadership: 1,
    level: "mid"
}