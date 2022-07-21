enum job {
    actress,
    Baker
}

type human = {
    name: string,
    age: number,
    profession: job
}

let person1: human = {
    name: 'luana',
    age: 29,
    profession: job.actress
};

let person2: human = {
    name: 'thiago',
    age: 18,
    profession: job.Baker
};

let person3: human = {
    name: 'joana',
    age: 35,
    profession: job.actress
};

let person4: human = {
    name: 'matheus',
    age: 22,
    profession: job.Baker
}