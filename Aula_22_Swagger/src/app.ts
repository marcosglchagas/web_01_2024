import express from 'express';
import {RegisterRoutes } from './route/routes';
import { setupSwagger} from './config/swagger';
import { cadastrarProduto, atualizarProduto, deletarProduto, filtrarProduto, listarTodosProduto } from './controller/ProductController';

const app = express();

const PORT = 3040;

app.use(express.json());

app.post("/api/product", cadastrarProduto)
app.put("/api/product", atualizarProduto)
app.delete("/api/product", deletarProduto)
app.get("/api/product", filtrarProduto)
app.get("/api/product/all", listarTodosProduto)

const apiRouter = express.Router();
RegisterRouters(apiRouter);

app.use('/api', apiRouter);

RegisterRoutes(app);

setupSwagger(app);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));