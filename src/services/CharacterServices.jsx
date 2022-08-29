import { Api } from "../helper/Api.js";

const parseResponse = (response) => response.json();

/*
  Notação do professor:

  Sua aplicação não conseguiu se comunicar com a API,
  pois nesse trecho de código, você realizou o fetch erronamente,
  isso fora o fato da configuração no Api.js também apontar para o endpoint
  errado.

  Os trechos de código que resolveriam esse conflitão são:

    export const CharacterServices = {
        getAllCharacters: () => fetch(Api.charactersList(), { method: "GET" }).then(parseResponse),
        getOneCharacter: (id) => fetch(Api.characterById(id), { method: "GET" }).then(parseResponse),
    };

  Obs.: Você acabou sendo penalizado em multiplas etapas da avaliação
  exatamente por não conseguir se comunicar com o a API.
*/
export const CharacterServices = {
    getAllCharacters: () => fetch(Api.charactersList(), { method: "GET" }).then(parseResponse),
    getOneCharacter: (id) => fetch(Api.characterById(), { method: "GET" }).then(parseResponse),
};