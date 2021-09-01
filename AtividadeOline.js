//CONDICIONAIS  DATA
var  DataAtual = new Date();
//Data  do evento 
var  DataDoEvento = new Date(2021, 11,17);
//Condicional  do Evento.
if (DataDoEvento > DataAtual) {
    console.log("Evento autorizado.")
} else{
    console.log("Isira uma data valida.")
}

//CONDIÇÃO DE IDADE
//idade do participante 
var  idade = 35;
//Condição  de idade minima de 18 anos para permitir cadastro
if (idade >=18) {
    console.log("Cadastro Autorizado.")
} else {
   console.log("Cadastro não autorizado, somente para maiores de 18 anos!.") 
}

// NÚMERO DE PARTICIPANTES/PALESTRANTES
//lista de participantes do envento
var  participantes = ["Marcos", "Mariana", "Wesley", "Paulo"," Ruann","Maria"]
//Condicional para numero maximo de 100 participantes 
if (participantes.length <=100) {
    console.log("Cadastro Permitido")
} else {
    console.log("cadastro não autorizado , local so permite até 100 pessoas.")
}
