/* eslint-disable @typescript-eslint/no-unused-vars */
const nome: string = 'Talison';
const idade: number = 18;
const adulto: boolean = true;
const symbol: symbol = Symbol('qualquer symbol');
// const big: bigint = 10n;

const arrayNum: Array<number> = [2, 3, 4];
const arrayString: Array<string> = ['tfrfg', 'dsfds'];
const arrayString2: string[] = ['tfrfg', 'dsfds'];

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
    nome: 'Talison',
    idade: 22,
};

function soma(x: number, y: number): number {
    return x + y;
}

const fun: (x: number, y: number) => number = (x, y) => x + y;

function semRetorno(...rest: string[]): void {
    console.log('TESTE' + rest);
}

semRetorno('talison', 'miguel');
// ----------------------------------------

interface ObjectProps {
    key1: string;
    key2: string;
    [key: string]: unknown;
}

const objA: ObjectProps = {
    key1: 'teste',
    key2: 'teste2',
    teste: 'fdfd',
};

const arr: string[] = [];

const dadosClient: [number, string] = [1, 'string'];
const dadosClient2: readonly [number, string] = [1, 'string'];

//--------------------------------------------------

enum Cores {
    VERMELHO,
    AZUL,
    AMARELO,
}

console.log(Cores);

//-----------------------------------------------

let x: unknown;

//-----------------------------------------------

function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a} ${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('Talison', ' 20'));

//-----------------------------------------------

type person = {
    name: string;
    age: number;
    gender: string;
    color: 'red' | 'blue' | 'green';
};

const person1: person = {
    name: 'Talison',
    age: 18,
    gender: 'male',
    color: 'red',
};

console.log(person1);

//---------------------------------------
