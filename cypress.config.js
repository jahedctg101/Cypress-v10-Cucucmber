const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//   stepDefinitions: [
//     "[filepath]/**/*.{js,ts}",
//     "[filepath].{js,ts}",
//     "cypress/e2e/step_definitions/*.{js,ts}"
// ]

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
    })
    on("file:preprocessor", bundler);
    await addCucumberPreprocessorPlugin(on, config);

    return config;
  },
  specPattern: "cypress/e2e/features/*.feature",
  baseUrl: "https://demo.nopcommerce.com/",
  chromeWebSecurity: false,
  // supportFile: 'cypress/support/commands.js'
}
});
