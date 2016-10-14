import { queryCount, mutationCount } from './countObjectType';

const query = {
  name: 'count',
  type: queryCount,
  resolve: () => 0,
};

const mutation = {
  name: 'count',
  type: mutationCount,
  resolve: () => 0,
};

const count = {
  mutation,
  query,
};

export default count;

