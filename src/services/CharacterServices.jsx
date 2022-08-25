import { Api } from "../helper/Api.js";

const parseResponse = (response) => response.json();

export const CharacterServices = {
    getAllCharacters: () => fetch(Api.charactersList(), { method: "GET" }).then(parseResponse),
    getOneCharacter: (id) => fetch(Api.characterById(), { method: "GET" }).then(parseResponse),
};