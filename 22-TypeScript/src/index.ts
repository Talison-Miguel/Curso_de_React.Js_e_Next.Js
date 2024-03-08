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
