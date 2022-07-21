//resp 1
const employee1 = {
    code: 10,
    name: 'joao'
};

//resp 2 
const employee2: {code: number, name: string} = {
    code: 10,
    name: 'joao'
}

interface employee {
    code: number,
    name: string
};

const objemployee = {} as employee;
objemployee.code = 10;
objemployee.name = 'joao';

const objemployee2: employee = {
    code: 10,
    name: 'joao'
}