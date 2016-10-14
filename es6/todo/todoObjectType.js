import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import todos from './../../mock-todo.json';

const addNewTodo = (root, args) => {
  const timestamp = (new Date()).getTime();
  const { title } = args;
  todos.push({
    timestamp,
    title,
    done: false,
  });
  return todos;
};

const todoArgs = {
  timestamp: { type: GraphQLString },
  title: { type: GraphQLString },
  done: { type: GraphQLBoolean },
};

const todoType = new GraphQLObjectType({
  name: 'todo',
  fields: todoArgs,
});

const queryTodo = new GraphQLObjectType({
  name: 'TodoQuery',
  fields: () => ({
    todos: {
      type: new GraphQLList(todoType),
      args: todoArgs,
      resolve: () => todos,
    },
  }),
});

const mutationTodo = new GraphQLObjectType({
  name: 'MutationTodo',
  fields: () => ({
    todos: {
      type: new GraphQLList(todoType),
      args: todoArgs,
      resolve(root, args) {
        return addNewTodo(root, args);
      },
    },
  }),
});

export { queryTodo, mutationTodo };
