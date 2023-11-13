import expressApp from "./express";

// import { PARENT_PATH, SERVER_PORT } from "./const/const"


expressApp.listen(5000, () => {
    console.log("server start")
})

// ts-node index.ts





// import express, { Express, Request, Response } from 'express';

// const app: Express = express();
// const port = 5000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Typescript + Node.js + Express Server');
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at <https://localhost>:${port}`);
// });