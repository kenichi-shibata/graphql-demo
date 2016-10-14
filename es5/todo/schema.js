var graphql = require('graphql');

// Here is some dummy data to make this piece of code simpler.
// It will be changeable after introducing mutation.
var TODOs = [
  {
    "time": 1446412739542,
    "title": "Read emails",
    "completed": false
  },
  {
    "time": 1446412740883,
    "title": "Buy orange",
    "completed": true
  }
];

var addNewTodo =  function (root, args) {
  var time = (new Date()).getTime();
  TODOs.push({
  time: time,
  title: args.title,
  completed: false
  });
  return TODOs;
};

var TodoType = new graphql.GraphQLObjectType({
  name: 'todo',
  fields: function () {
    return {
      time: {
        type: graphql.GraphQLString
      },
      title: {
        type: graphql.GraphQLString
      },
      completed: {
        type: graphql.GraphQLBoolean
      }
    };
  }
});

var queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      todos: {
        type: new graphql.GraphQLList(TodoType),
        resolve: function () {
          return TODOs;
        }
      }
    };
  }
});

var mutationAdd = {
  type: new graphql.GraphQLList(TodoType),
  description: 'add a todo',
  args: {
    title: { type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
  },
  resolve: addNewTodo(root,args)
};

var mutationType = new graphql.GraphQLObjectType({
  name: 'Mutation',
  fields: {
    add: mutationAdd
  },
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
