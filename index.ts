import * as config from "./express_config";
import express, { Express, Request, Response } from 'express';

import graphqlHTTP from 'express-graphql';
import cors from "cors";

import { schema } from "./controllers/graphql_controller";

const app: Express = express();

app.use(cors(config.corsOptions));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TechSalat GraphQL app!');
});

app.listen(8091, async() => {
  console.log("Node.js launched at ::8091");
});