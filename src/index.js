import prompt from 'prompt-sync'


const entrada = []

const instancia = prompt()



while (!entrada.includes("sair")){
   let resposta = instancia('Digite uma propriedade CSS:')
   resposta.toLocaleLowerCase()
   entrada.push(resposta)
  
}


if (entrada.includes("sair")){
    entrada.pop()
    console.log(entrada.sort())
}



