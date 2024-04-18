import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "ea5f2o",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
