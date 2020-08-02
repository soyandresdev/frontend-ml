const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Routes': path.resolve(__dirname, 'src/routes/'),
      '@Hooks': path.resolve(__dirname, 'src/hooks/'),
      '@Utils': path.resolve(__dirname, 'src/utils/'),
      '@UI/Atoms': path.resolve(__dirname, 'src/components/atoms/'),
      '@UI/Molecules': path.resolve(__dirname, 'src/components/molecules/'),
      '@UI/Organisms': path.resolve(__dirname, 'src/components/organisms/'),
      '@UI/Templates': path.resolve(__dirname, 'src/components/templates/'),
      '@UI/Pages': path.resolve(__dirname, 'src/pages/'),
      '@Static': path.resolve(__dirname, 'src/static/'),
      '@Styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@Routes(.*)$': '<rootDir>/src/routes$1',
        '^@Hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@Utils(.*)$': '<rootDir>/src/utils$1',
        '^@UI/Atoms(.*)$': '<rootDir>/src/components/atoms$1',
        '^@UI/Molecules(.*)$': '<rootDir>/src/components/molecules$1',
        '^@UI/Organisms(.*)$': '<rootDir>/src/components/organisms$1',
        '^@UI/Templates(.*)$': '<rootDir>/src/components/templates$1',
        '^@UI/Pages(.*)$': '<rootDir>/src/pages$1',
        '^@Static(.*)$': '<rootDir>/src/static$1',
        '^@Styles(.*)$': '<rootDir>/src/styles$1',
      },
    },
  },
};
