import express, { Request, Response } from "express";
import { salarioLiquido } from "./src/salarioLiquido";

const app = express();

app.get("/salario/:salario", (req: Request<{ salario: string }>, res: Response) => {
    const rsalarioLiquido = salarioLiquido(Number(req.params.salario))
    res.json(rsalarioLiquido)
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App is running at http://localhost:${port}`))