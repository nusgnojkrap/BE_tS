import express, { Request, Response } from "express";

const app = express();

type Data = {
    name: string;
    age:number;
    url:string;
};

const sendData: Data = {
    name:"jongsun",
    age:30,
    url:"test.com",
};

app.get("/", (req: Request, res: Response) => {
    console.log("hihi");
    res.send(sendData);
})

app.listen(4444)

// start : npm run dev