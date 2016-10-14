import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import array from './../../mock-data.json';
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

const queryMember = new GraphQLObjectType({
  name: 'MemberQuery',
  fields: () => ({
    member: {
      type: member,
      args: memberArgs,
      resolve: (_, args) => {
        console.log('---');
        console.log(`root: ${JSON.stringify(_)}`);
        console.log(`args: ${JSON.stringify(args)}`);
        return findByProperty(args, array);
      },
    },
    members: {
      type: new GraphQLList(member),
      args: memberArgs,
      resolve: (_, args) => findByPropertyArray(args, array),
    },
  }),
});


export default queryMember;
