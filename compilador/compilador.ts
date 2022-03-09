let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;
console.log(`Canal = ${canal}`);

// let nome = "Pedro"; Erro

function soma(a: any, b: any) {
  return a + b;
}

// Não gera erro de any implicito
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(ismanha: boolean): string {
  let saudacao: string;
  if (ismanha) {
    saudacao = "Bom Dia!";
  } else {
    saudacao = "Tenha uma boa vida!";
  }
  return saudacao;
}
