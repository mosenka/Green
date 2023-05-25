// eslint-disable-next-line import/extensions
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./src",
});

/** @type {import("jest").Config} */
const config = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@app/(.*)$": "<rootDir>/src/app/$1",
		"@entities/*": "<rootDir>/src/entities/$1",
		"@features/*": "<rootDir>/src/features/$1",
		"@pages/*": "<rootDir>/src/pages/$1",
		"^@shared/(.*)$": "<rootDir>/src/shared/$1",
		"^@pages/(.*)$": "<rootDir>/src/pages/$1",
		"^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
	},
};

export default createJestConfig(config);
