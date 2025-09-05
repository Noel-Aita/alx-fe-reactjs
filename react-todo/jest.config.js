export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",  // transforms JSX & ESModules
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
