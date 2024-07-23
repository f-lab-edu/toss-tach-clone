export default {
	preset: 'ts-jest',
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'^@/(.*)$': '<rootDir>/src/$1',
	},

	testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	silent: true,
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};
