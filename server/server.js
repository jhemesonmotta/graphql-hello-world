import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// esta é a definição (como uma classe)
const typeDefs = `#graphql
  type Query {
    greeting: String
  }
`;

// aqui é onde o valor será buscado (como um service)
const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
  },
};


const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);