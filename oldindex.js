var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var port = process.env.PORT||3000;
var path = '/api/graphql';
var data = require('./data.json');

var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString},
    name: { type: graphql.GraphQLString},
  }
});

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: function(_, args){
          return data[args.id];
        }
      }
    }
  })
});

express()
.use(path,graphqlHTTP({schema:schema, pretty:true, graphiql: true}))
.listen(port);

console.log('GraphQL server running on http://localhost:'+port+path);
