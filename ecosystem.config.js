module.exports = {
  apps : [
      {
        name: "github-webhooks",
        script: "./build/app.js",
        watch: ["build"],
        env: {
            "PORT": 4500,
            "NODE_ENV": "development",
            "GITHUB_WEBHOOK_PATH": "/var/node/github-webhooks"
        },
	env_production: {
	    "PORT": 3000,
            "NODE_ENV": "production",
            "GITHUB_WEBHOOK_PATH": "/var/node/github-webhooks"
	},
      }
  ]
}
