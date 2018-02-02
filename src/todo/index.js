import { queryTodo, mutationTodo } from './todoObjectType';

const query = {
  name: 'todo',
  type: queryTodo,
  resolve: () => 0,
};

const mutation = {
  name: 'todo',
  type: mutationTodo,
  resolve(root, args) {
    return 'args';
  },
};

const todo = {
  query,
  mutation,
};

export default todo;
