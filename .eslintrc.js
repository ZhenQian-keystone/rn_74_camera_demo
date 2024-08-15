module.exports = {
  root: true,
  extends: '@react-native',
  // must config react hooks use rule
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useAsync|useAsyncCallback)',
      },
    ],
  },
};
