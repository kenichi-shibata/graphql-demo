import express from 'express';
// import { graphql } from 'graphql';
import graphqlHTTP from 'express-graphql';
// import bodyParser from 'body-parser';
import schema from './user/schema';

const path = '/graphql';
const app = express();
const PORT = process.env.PORT || 8481;

// app.use(bodyParser.text({ type: 'application/graphql' }));
app.use(path, graphqlHTTP({ schema, pretty: true, graphiql: true }));

// app.post(path, (req, res) => {
//   graphql(schema, req.body)
//     .then((result) => {
//       res.send(JSON.stringify(result, null, 2));
//     });
//

//
// });

const server = app.listen(PORT, () => {
  const host = server.address().host;
  const port = server.address().port;
  console.log(`Graphql listening at http://${host}:${port}${path}`);
});
