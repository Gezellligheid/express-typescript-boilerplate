// app.ts
import express, { Request, Response } from 'express';

// APP SETUP
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json()); // for parsing application/json

// ROUTES
app.get('/', (request: Request, response: Response) => {
  response.send(`If you read this, it works`);
});

// APP START
app.listen(port);
console.info(`\nServer 👾 \nListening on http://localhost:${port}/`);
