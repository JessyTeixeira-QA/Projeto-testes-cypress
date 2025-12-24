/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "69eyjt", // Usando o ID mais recente que você forneceu
  
  e2e: {
    baseUrl: 'http://localhost:3000/',
    
    // --- OTIMIZAÇÕES PARA 8GB RAM ---
    video: false, // Desativado para economizar CPU. Mude para true se precisar gravar.
    numTestsKeptInMemory: 2, // Reduzi de 5 para 2 para dar mais fôlego ao seu Linux
    experimentalMemoryManagement: true, // Limpa o cache de memória automaticamente
    
    // --- CONFIGURAÇÕES DE RELATÓRIO ---
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true, // Mudei para true para que o Mochawesome consiga compilar os resultados depois
      timestamp: "mmddyyyy_HHMMss"
    },

    defaultCommandTimeout: 60000,

    // --- VARIÁVEIS DE AMBIENTE VOLLMED ---
    env: {
      "email": "clinica@gmail.com",
      "senha": "4321",
      "api_login": "http://localhost:8080/auth/login",
      "api_clinica": "http://localhost:8080/clinica",
      "api_especialista": "http://localhost:8080/especialista",
      "requestMode": true
    },
  }, // Fim da seção e2e
});