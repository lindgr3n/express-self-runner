# Deployment of node app to IIS using GithubActions

Set up IIS and install (Azure/iisnode)[https://github.com/Azure/iisnode].
Install [url-rewrite](https://www.iis.net/downloads/microsoft/url-rewrite) module

Create your basic node app.

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Note that we need to get the port from the `process.env.PORT` because that is provided by iis.

Setup new site in IIS
Setup self runner in repo
Create GithubAction configuration

Write something about using modules that we need to hack the interceptor.