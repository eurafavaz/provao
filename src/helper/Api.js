const characterContext = {
    characterEndpoint: () => `${baseUrl}/:id`,
    charactersList: () => characterContext.characterEndpoint(), 
    characterById: () => `${characterContext.characterEndpoint()}/${id}`,
};

export const Api = {
    baseUrl: "https://api.disneyapi.dev",
    ...characterContext,
  };