const ignore = [
  '/.openapi-nodegen/',
  '/node_modules/',
  '/build/',
  '/dist/',
];

// eslint-disable-next-line no-undef
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'ts',
    'tsx',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/cli/*.{js,ts}',
    'src/cache/*.{js,ts}',
    'src/domains/*.{js,ts}',
    'src/events/reactHandles/*.{js,ts}',
    'src/repository/*.{js,ts}',
    'src/services/*.{js,ts}',
    'src/utils/*.{js,ts}',
  ],
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  transformIgnorePatterns: ignore,
  testPathIgnorePatterns: ignore,
  modulePathIgnorePatterns: ignore,
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    './jest.setup.js',
  ]
};
