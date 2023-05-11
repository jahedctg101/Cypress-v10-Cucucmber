const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//Allure Report
/// <reference types="@shelex/cypress-allure-plugin" /> 
  const allureWriter = require('@shelex/cypress-allure-plugin/writer');//For Allure Report

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
    on('file:preprocessor', bundler);
    await addCucumberPreprocessorPlugin(on, config);
    allureWriter(on, config);
    return config;
    
  },
  // *** Note : Uncomment when we want to run Cuucmber ***
  // specPattern: "cypress/e2e/features/*.feature",
  specPattern: "cypress/e2e/features/nopcommerceFinal.feature",
  baseUrl: "https://demo.nopcommerce.com/",
  chromeWebSecurity: false,
  supportFile: 'cypress/support/commands.js'// Without this cong. cucumber run successfuly
}
});
