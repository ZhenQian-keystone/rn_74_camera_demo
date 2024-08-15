module.exports = {
  root: true,
  extends: '@react-native',
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
