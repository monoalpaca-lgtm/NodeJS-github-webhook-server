// lib/app.ts
import express = require('express');
import * as child from 'child_process';

const port = process.env.PORT || 4500;
const githubWebhooksPath = process.env.GITHUB_WEBHOOK_PATH;

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
  child.exec(`./scripts/UpdateGitWebhookRepo.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
