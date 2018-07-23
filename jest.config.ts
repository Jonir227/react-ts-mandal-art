module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  // ts-jest는 typescript를 js로 컨버트 해준다.
  transform: {
    '.*\.tsx?$': 'ts-jest',
  },
  // __test__ 폴더 혹은 어디에 있든 뒤쪽 정규식에 맞는 테스트 파일을 불러옴.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
};
