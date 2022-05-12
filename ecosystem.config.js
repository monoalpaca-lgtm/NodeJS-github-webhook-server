module.exports = {
  apps : [
      {
        name: "github-webhooks",
        script: "./build/app.js",
        watch: ["build"],
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,
            "NODE_ENV": "production",
        }
      }
  ]
}
