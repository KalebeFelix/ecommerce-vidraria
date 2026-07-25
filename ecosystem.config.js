module.exports = {
  apps: [
    {
      name: "Next-ecommerce-vidraria",
      script: ".next/standalone/server.js",
      env: {
        PORT: 4000,
        NODE_ENV: "production",
      },
    },
  ],
};
