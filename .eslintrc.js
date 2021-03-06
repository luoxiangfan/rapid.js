module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb-base',
  'rules': {
    'indent': ['error', 2],
    'padded-blocks': 0,
    'class-methods-use-this': ['error', { 'exceptMethods': ['boot'] }],
    'no-useless-constructor': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-return-assign': 0,
    'prefer-rest-params': 0,
    'consistent-return': 0,
    'space-before-function-paren': 0,
    'valid-jsdoc': ['error', {
      'prefer': { 'return': 'return' },
      'preferType': { 'Boolean': 'Boolean', 'Number': 'Number', 'object': 'Object', 'String': 'String' },
      'requireReturn': false,
      'requireParamDescription': false,
      'requireReturnDescription': false
    }]
  },
  'globals': {
    'it': true,
    'describe': true,
    'beforeAll': true,
    'beforeEach': true,
    'afterEach': true,
    'afterAll': true,
    'before': true,
    'after': true,
    'expect': true,
    'jest': true
  }
};
