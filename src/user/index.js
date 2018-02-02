import queryMember from './memberObjectType';

const query = {
  name: 'user',
  type: queryMember,
  resolve(_, args) {
    return 'args';
  },
};

const member = {
  query,
};

export default member;

