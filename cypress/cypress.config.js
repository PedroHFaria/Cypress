const path = require("path");

module.exports = {
  ...(on, config) => {
    // Configura o caminho para os testes
    config.integrationFolder = "cypress/e2e";

    // Carrega os plugins do Cypress
    require("cypress-plugin-retries/lib/plugin")(on, config);

    // Define o tempo de espera global para 5 segundos (5000 milissegundos)
    config.defaultCommandTimeout = 10000;

    // Retorna a configuração atualizada
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
