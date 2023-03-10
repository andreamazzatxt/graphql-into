module.exports = {
  client: {
    service: {
      name: "bitrock-graphql",
      url: "https://api.github.com/graphql",
      //In case url is not working (401) download schema from https://docs.github.com/public/schema.docs.graphql
      // localSchemaFile: "./schema.graphql",
    },
    includes: ["./src/**/*.tsx", "./src/**/*.ts"],
  },
};
