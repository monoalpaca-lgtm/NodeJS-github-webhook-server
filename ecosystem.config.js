module.exports = {
  apps : [
      {
        name: "github-webhooks",
        script: "./build/app.js",
        watch: false,
        env_development: {
            "PORT": 4500,
            "NODE_ENV": "development",
            "GITHUB_WEBHOOK_PATH": "/home/node-runner/workspaces/github-webhook-server"
        },
	env_production: {
	    "PORT": 3000,
            "NODE_ENV": "production",
            "GITHUB_WEBHOOK_PATH": "/var/node/github-webhooks"
	},
      }
  ]
}
