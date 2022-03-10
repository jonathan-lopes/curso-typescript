# Curso Typescript! <img align="center" style="width: 30px; height: 30px;" src="https://appmasters.io/static/typescript-logo-26cc95f255ccb936d154b43614f61602.png" alt="Logo Typescript">

## Seção 1: Introdução

### O que é TypeScript?

O TypeScript é um superset para o JavaScript, ou seja você tem todas as funcionalidades do javascript acrescida de varias funcionalidades, qualquer código dessa linguagem pode ser colocado em um arquivo com extensão .ts, e utilizado diretamente. Este é um ponto bastante positivo, pois podemos utilizar códigos JavaScript já existentes, sem a necessidade de realizarmos grandes conversões.

### Instalando TypeScript

Instalado o TypeScript de forma global

```bash
npm i -g typescript
```

### Formas de Execução

<details>
    <summary>Manual</summary>
    <p>
        Primeiro precisamos compilar o nosso arquivo <code>.ts</code> porque nem o browser, nem o node entendem TypeScript
        como já instalamos o TypeScript de forma global basta chama o comando <code>tsc</code>.<br/>
        <code>tsc nome-arquivo.ts</code><br/>
        Apos isso irá ser gerado um arquivo com extensão <code>.js</code>
        que podemos executar usando o node.
        <br/><code>node nome-arquivo.js</code> 
    </p>
</details>

<details>
    <summary>Code Runner</summary>
    <p>
        Basta instalar a extensão code runner, que está disponível na loja será necessário instalar o ts-node também, <code>npm i -g ts-node</code>.<br>
        Para executar é só apertar CTRL+ALT+N
    </p>
</details>
<br/>

## Seção 2: Tipos

### Strings

```ts
let nome: string = "João";
console.log(nome);
// nome = 28 ERRO
```

### Numéricos e Booleanos

```ts
let idade: number = 28;
idade = 28.5;
// idade = "Anna" ERRO
```

```ts
let possuiHobbies: boolean = false;
// possuiHobbies = 1; ERRO
```

### Atribuindo Tipos Explícitos

Dessa forma temos um tipo dinâmico (any) como temos no Javascript.

```ts
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade); // number
minhaIdade = "idade é 27";
console.log(typeof minhaIdade); // string
```

### Array

```ts
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [10, 85, 30];
// hobbies = 5 ERRO
```

### Tuplas

expressa uma matriz com um número fixo de elementos cujos tipos são conhecidos, mas não precisam ser os mesmos.

```ts
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
```

### Enums

Enum é uma maneira de dar nomes mais amigáveis ​​a conjuntos de valores numéricos.

```ts
enum Cor {
  Cinza,
  Verde
  Azul,
  Laranja,
  Amarelo,
  Vermelho,
}
let minhaCor: Cor = Cor.Verde;
```
Enum começam a numerar seus membros começando em 0. Você pode alterar isso definindo manualmente o valor de seus membros.
```ts
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

console.log(Cor.Verde, Cor.Vermelho);
```

### Any

```ts
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
```

### Usando Tipos em Funções (Parâmetros e Retorno)

```ts
function retornaHello(): string { // Retornar uma string
  return "Hello";
}
```

```ts
// Tipando parâmetros em funções
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(5, 5));
console.log(multiplicar(4.7, 9));
```

### Funções Como Tipos
Podemos tipar a assinatura de uma função.

```ts
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));
```
### Objeto

```ts
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};
console.log(usuario);
```

### Definido Tipos Personalizados (Alias)

```ts
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Marcos", "Anna"],
  baterPonto: (horario: number): string =>
    horario <= 8 ? "Ponto normal" : "Fora do horário",
};
```

### Múltiplos Tipos com Union Types
Permite compor ou combinar tipos existentes.

```ts
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
```

### Never 
neveré o tipo de retorno para uma expressão de função ou uma expressão de função de seta que sempre lança uma exceção ou que nunca retorna.

```ts
function falha(msg: string): never {
  throw new Error(msg);
}
```

## Seção 3: Compilador TypeScript

### Compilação e "noEmitOnError"

Desativa a emissão de arquivos se algum erro de verificação de tipo for relatado.

```json
  "noEmitOnError": true,  
```

### Alterando o Target (Versão do JavaScript)

Define a versão da linguagem JavaScript que será usado no arquivo compilado. Podendo ser 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'esnext'

```json
  "target": "es6",  
```

### Debugando com Source Maps

Crie arquivos de mapa de origem para arquivos JavaScript emitidos.

```json
  "sourceMap": true,  
```

### Evitando "Any" Implícito

Habilita o relatório de erros para expressões e declarações com tipo implícito `any`, por padrão é true.

```json
  "noImplicitAny": true,  
```

### "strictNullChecks", "noUnusedParameters" e "noUnusedLocals"

#### strictNullChecks
Ao verificar o tipo, leve em consideração `null` e `undefined`.

```json
  "strictNullChecks": true,  
```

#### noUnusedParameters
Gerar um erro quando um parâmetro de função não é lido.

```json
  "noUnusedParameters": true,  
```

#### noUnusedLocals
Habilita o relatório de erros quando uma variável local não for lida.

```json
  "noUnusedLocals": true,  
```

### Diretório de Saída
Especifique uma pasta de saída para todos os arquivos emitidos.

```json
  "outDir": "./build",  
```

### Arquivo de Saída
Especifica um arquivo que empacota todas as saídas em um único arquivo JavaScript.

```json
  "outFile": "./build/app.js",  
```

### Links Úteis:

[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) <br/>
[Opções de CLI do tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html)