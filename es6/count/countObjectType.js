import {
  GraphQLObjectType,
  GraphQLInt,
} from 'graphql';

let count = 10;

const queryCount = new GraphQLObjectType({
  name: 'CountQuery',
  fields: {
    count: {
      type: GraphQLInt,
      fields: {
        count: { type: GraphQLInt },
      },
      resolve: (root, args) => {
        console.log('---');
        console.log(`root: ${root}`);
        console.log(`args: ${JSON.stringify(args)}`);
        return count;
      },
    },
  },
});

const mutationCount = new GraphQLObjectType({
  name: 'CountMutation',
  fields: {
    updateCount: {
      type: GraphQLInt,
      description: 'updates the count',
      resolve() {
        count += 1;
        return count;
      },
    },
  },
});

export { queryCount, mutationCount } ;
