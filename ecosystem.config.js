module.exports = {
  apps: [
    {
      name: "ponto-do-vidro",
      script: ".next/standalone/server.js",
      env: {
        PORT: 4000,
        NODE_ENV: "production",
      },
    },
  ],
};
