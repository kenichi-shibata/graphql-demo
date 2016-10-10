import {
  GraphQLObjectType,
  GraphQLSchema,
  // GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import data from './../../mock-data.json';
import { findByProperty, findByPropertyArray } from './filter';

const memberArgs = {
  Name: { type: GraphQLString },
  ldap: { type: GraphQLString },
  Email: { type: GraphQLString },
  Slack: { type: GraphQLString },
  Github: { type: GraphQLString },
};

const member = new GraphQLObjectType({
  name: 'User',
  fields: memberArgs,
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
      member: {
        type: member,
        args: memberArgs,
        resolve: (_, args) => findByProperty(args, data),
      },
      members: {
        type: new GraphQLList(member),
        args: memberArgs,
        resolve: (_, args) => findByPropertyArray(args, data),
      },
    }),
  }),
});

export default schema;
