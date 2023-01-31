const express = require("express");
const { createServer } = require("http"); //this is subscription server live
const { makeExecutableSchema } = require("@graphql-tools/schema"); //this is makeExecutableSchema from typeDefs and resolvers
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { execute, subscribe } = require("graphql");
const { ApolloServer } = require("apollo-server-express"); //this is apollo server
const mongoose = require("mongoose"); //this is mongoose

const typeDefs = require("./schema/typeDefs"); //this is typeDefs
const resolvers = require("./schema/resolvers");
//this is resolvers

mongoose.set("strictQuery", true);

(async function () {
  const app = express();
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: "/graphql",
    }
  );

  const server = new ApolloServer({
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  await server.start();
  server.applyMiddleware({ app });

  await mongoose.connect(
    "mongodb+srv://tharinduspm:tharindu12345@spm.jr6dlnb.mongodb.net/?retryWrites=true&w=majority"    ,
    {}
  );

  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 8000;

  httpServer.listen({ port: PORT }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
