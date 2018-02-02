import express from 'express';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import graphqlHTTP from 'express-graphql';
import count from './count';
import user from './user';
import todo from './todo';

const path = '/playground';
const app = express();
const PORT = process.env.PORT || 8481;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      count: count.query,
      user: user.query,
      todo: todo.query,
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      count: count.mutation,
      todo: todo.mutation,
    },
  }),
});

app.use(path, graphqlHTTP({ schema, pretty: true, graphiql: true }));

const server = app.listen(PORT, () => {
  const host = server.address().host;
  const port = server.address().port;
  console.log(`Graphql listening at http://${host}:${port}${path}`);
});
