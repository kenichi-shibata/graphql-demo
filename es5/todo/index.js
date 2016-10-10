var graphql = require ('graphql').graphql;
var express = require('express');
var graphQLHTTP = require('express-graphql');
var Schema = require('./schema');

var app = express()
  .use('/', graphQLHTTP({ schema: Schema, pretty: true, graphiql: true }))
  .listen(8080, function (err) {
    console.log('GraphQL Server is now running on localhost:8080');
  });
