// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar o casaco";
  console.log(acao);
}

const cpf: string = "123.456.000-99";
// cpf = "789.101.123-78";
console.log(cpf);

var segredo = "externo";
function revelar() {
  const segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Arrow Function
function somar(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(20, 22));

const saudacao = () => console.log("Olá");
saudacao();

const falarCom = (pessoa: string) => console.log("Ola ", pessoa);
falarCom("João");

// this

// function normalComThis() {
//   console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind(2);
// normalComThisEspecial();

// this???
console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind({ nome: "Ana" });
// arrowComThisEspecial();

// Parâmetro Padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim");
}

contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers)); // spread

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", ...turmaA, "Miguel", "Lorena"]; // rest
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor, ano);

// Destructuring (objeto)
const item = {
  nome: "SSD 480GB",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};

const nomeItem = item.nome;
const precoItem = item.preco;

const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n, p, w);

// Templete String

const usuarioID: string = "SuporteCod3r";
const notificacoes: string = "9";
// const boasVindas = "Boas Vindas " + usuarioID + " Notificaçoes: " + notificacoes;
const boasVindas = `Boas Vindas ${usuarioID}
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);

// Desafios

// Exercicio 1
const dobro = (valor: number): number => valor * 2;
console.log(dobro(5));

// Exercicio 2
const dizerOla = (nome: string = "pessoa"): void => {
  console.log("Olá ", nome);
};

dizerOla();
dizerOla("João");

// Exercicio 3
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Exercicio 4
const array: number[] = [55, 20];
array.push(...nums);
console.log(array);

// Exercicio 5
const notas: number[] = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);

// Exercicio 6
const cientista: { primeiroNome: string; experiencia: number } = {
  primeiroNome: "Will",
  experiencia: 12,
};

const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

// Promises

// callback
function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois...");
  }, 3000);
}

esperar3s((resultado: string) => {
  console.log(resultado);
});

function esperarPromise() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperarPromise().then(console.log);

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[0]))
  .then((resFilm) => resFilm.json())
  .then((filme) => console.log(filme.title))
  .catch((err) => console.log("Catch! ", err));
