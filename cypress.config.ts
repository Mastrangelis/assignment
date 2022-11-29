import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack'
        }
    },
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: './cypress/reports',
        overwrite: false,
        mochaFile: './cypress/reports/report-[hash].json'
    },
    e2e: {
        baseUrl: 'http://localhost:3000',
        viewportHeight: 720,
        viewportWidth: 1200,
        // eslint-disable-next-line no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
