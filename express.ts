import express, { Express, Request, Response } from 'express';

import bodyParser from "body-parser";
import routeHome from "./router/home";
import routeError from "./router/error"

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use("/", routeHome);
app.use(routeError);

export default app;

// const port = 5000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Typescript + Node.js + Express Server');
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at <https://localhost>:${port}`);
// });