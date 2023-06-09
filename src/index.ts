import express, { Request, Response } from "express";
import { salarioLiquido } from "./salarioLiquido";

const app = express();

app.get("/salario/:salario", (req: Request<{ salario: string }>, res: Response) => {
    const rsalarioLiquido = salarioLiquido(Number(req.params.salario))
    res.json(rsalarioLiquido)
});

app.get("/", (req, res) => res.status(200).json("healthy"))

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`App is running at http://localhost:${port}`))