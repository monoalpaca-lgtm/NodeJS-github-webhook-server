// lib/app.ts
import express = require('express');
import * as child from 'child_process';
import * as Repos from './constants/Repos';

const port = process.env.PORT || 4500;
const githubWebhooksPath = process.env.GITHUB_WEBHOOK_PATH;

const updateGitWebhookRepository = () => {
  child.exec(`./scripts/UpdateGitWebhookRepo.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/kenny', function (req, res) {
  res.send('Its Kenny!');
});

app.get('/andy', function (req, res) {
  res.send('Its andy!');
});

app.get('/pullGit', (req, res) => {
  res.send(`Updated repository here: ${githubWebhooksPath}`);
  updateGitWebhookRepository();
});

app.post('/github-webhooks/payload', (req, res) => {
  res.sendStatus(200);
  res.end();

  const requestRepoName  = req.body.repository.name;

  const getRepo = Repos.RepoByName[requestRepoName];
  
  if (!getRepo) {
    return;
  }

  if (getRepo.name === Repos.RepoName.GithubWebhook) {
    updateGitWebhookRepository();
  }
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
