const http = require('http');
const express = require('express');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const bodyParser = require('body-parser');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundleJSON = require('./dist/vue-ssr-server-bundle.json');
const clientManifestJSON = require('./dist/vue-ssr-client-manifest.json');
const template = fs.readFileSync('./src/index.hbs', 'utf-8');
const schema = require('./graphql/schema');
const production = process.env.NODE_ENV === 'production';
const app = express();

app.use('/dist', express.static('./dist'));
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({
  schema,
  pretty: true
}));

app.use('/graphql-ui', graphiqlExpress({endpointURL: '/graphql'}));

const renderer = createBundleRenderer(serverBundleJSON, {
  runInNewContext: false, // recommended
  template, // optional
  clientManifestJSON // optional
});

app.get('*', (req, res) => {
  const ctx = {url : req.url};
  renderer.renderToString(ctx, (err, html) => {
    if (err) {
      throw err;
    }
    res.end(html);
  });
});


http.createServer(app).listen(5000, _ => {
  console.log('listening on http://localhost:5000');
});
