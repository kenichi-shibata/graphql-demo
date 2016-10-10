import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
} from 'graphql';

let count = 10;

const countSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'CountQuery',
    fields: {
      count: {
        name: 'Count',
        type: GraphQLInt,
        fields: {
          count: { type: GraphQLInt },
        },
        resolve() {
          return count;
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: 'CountMutation',
    fields: {
      updateCount: {
        name: 'updateCount',
        type: GraphQLInt,
        description: 'updates the count',
        resolve() {
          count += 1;
          return count;
        },
      },
    },
  }),
});

export default countSchema;
