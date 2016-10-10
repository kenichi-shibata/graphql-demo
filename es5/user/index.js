var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var port = process.env.PORT||3000;
var path = '/api/graphql';
var data = require('./../../data.json');
var GraphQLString = graphql.GraphQLString;
var GraphQLList = graphql.GraphQLList;

var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    Name: { type: GraphQLString},
    ldap: { type: GraphQLString },
    Email: { type: GraphQLString },
    Slack: { type: GraphQLString },
    Github: { type: GraphQLString }
  }
});

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          Name: { type: GraphQLString }
        },
        resolve: function(_, args){
          console.log(JSON.stringify(data));
          console.log(args);
          return data[args.Name];
        }
      },
      users: {
        type: new GraphQLList(userType),
        resolve: function(){
          return data;
        }
      }
    }
  })
});

express()
.use(path,graphqlHTTP({schema:schema, pretty:true, graphiql: true}))
.listen(port);

console.log('GraphQL server running on http://localhost:'+port+path);
