

/*
  Notação do professor:

  Sua aplicação não conseguiu se comunicar com a API,
  pois nesse trecho de código, você configurou ela erronamente.

  Os trechos de código que resolveriam esse conflitão são:

  const characterContext = {
        characterEndpoint: () => `${baseUrl}`,
        charactersList: () => characterContext.characterEndpoint(),
        characterById: (id) => `${characterContext.characterEndpoint()}/${id}`,
    };

  Obs.: Você acabou sendo penalizado em multiplas etapas da avaliação
  exatamente por não conseguir se comunicar com o a API.
*/

const characterContext = {
    characterEndpoint: () => `${baseUrl}/:id`,
    charactersList: () => characterContext.characterEndpoint(),
    characterById: () => `${characterContext.characterEndpoint()}/${id}`,
};

export const Api = {
    baseUrl: "https://api.disneyapi.dev/characters",
    ...characterContext,
};