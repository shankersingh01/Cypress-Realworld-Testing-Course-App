import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // return the config object (required if you modify it or for some tooling)
      return config
    },
    baseUrl: "http://localhost:3000",
  },
});
