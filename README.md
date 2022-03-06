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

