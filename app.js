const moment = require('moment');
const fs = require('fs');

const petshop = "PETSHOP DH";

const nomeArquivo = 'pets.json';
let petsJSON = fs.readFileSync(nomeArquivo); //lê o arquivo
let arquivoPets = JSON.parse(petsJSON); //converte para JS

// console.log(arquivoPets.pets);

const atualizarJSON = () => {
  let listaJSON = JSON.stringify(arquivoPets, null, 2); //objeto pra converter, null para minificar, 2 para número de linha converte o objeto literal para JSON
  fs.writeFileSync(nomeArquivo, listaJSON, 'utf-8'); //caminho arquivo, conteudo novo, formato
}

let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: []
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: []
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: []
  }
];
const listarPets = (listaDePets) => {
  for (let contador = 0; contador < listaDePets.length; contador++) {
    console.log(`${listaDePets[contador].nome}, ${listaDePets[contador].idade} anos, ${listaDePets[contador].tipo}, ${listaDePets[contador].raca}, ${(listaDePets[contador].vacinado) ? 'vacinado' : 'não vacinado'}`);
    for (let index = 0; index < listaDePets[contador].servicos.length; index++) {
        console.log(`${listaDePets[contador].servicos[index].data} - ${listaDePets[contador].servicos[index].nome}`);
    }
  }
};
const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        atualizarJSON()
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {

        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
} 
const campanhaVacina = (listaPets) => {
    let totalVacinados = 0;
    for (let i = 0; i < listaPets.length; i++) {
        if (!listaPets[i].vacinado) {
            listaPets[i].vacinado = true;
            totalVacinados++;
        }
    }
    console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha!`);
};
const adicionarPet = (infoPet) => {
  arquivoPets.pets.push(infoPet);
    atualizarJSON();

    console.log(`${infoPet.nome} está cadastrado no nosso sistema!`);
}
const darBanhoPet = (pet) => {
    pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJSON()
    console.log(`${pet.nome} está cherose!`);
}

const darBanho = (pet) => {
    pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY')
    })
atualizarJSON()
    console.log(`${pet.nome} está cheiroso!`);
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        nome: 'aparar unhas',
        data: moment().format('DD-MM-YYYY')
    })
atualizarJSON()
    console.log(`${pet.nome} aparou as unhas!`);
}

const buscarPet = (nomePet) => {
  const petEncontrado = arquivoPets.pets.find((pet) => {
    return pet.nome == nomePet;
  })

  console.log(petEncontrado ? petEncontrado : "Nenhum pet encontrado com esse nome");
}

const atenderCliente = (pet, servico) => {
  console.log(`Olá, ${pet.nome}!`)
  servico(pet);
  console.log("Até mais!");
}

const addInfoCastrado = (listaPets) => {
  arquivoPets.pets = listaPets.map((pet) => {
    pet.castrado = true;

  return pet;
  })

  arquivoPets.pets = listaPetsAtualizado;
  atualizarJSON();
}

const listarVacinados = () => {
  console.log("* VACINADO *");

let vacinados = arquivoPets.pets.filter((pet) => {
    return pet.vacinado
  })

console.log(vacinados)
  console.log((`Temos ${vacinados.length} pets vacinados!`));
}

listarVacinados();