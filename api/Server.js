//Importa a biblioteca Express, responsável por criar o servidor e as rotas da API
import express from "express";

//Importa a biblioteca Cors, que permite a comunicação entre aplicações 
// executadas em portas diferentes (React e API)
import cors from "cors";

//Cria uma instância da aplicação express
const app = express();

//Habilita o CORS para permitir requisições vindas do React
app.use(cors());

//Permite que a API receba e interprete dados no formato JSON
app.use(express.json());

//Vetor responsável por armazenar temporáriamente todas as cunsultas realizadas pelo usuário
let historico = [];

//Método GET
//Utilizado para consultar informações já armazenadas na API
//Rota responsável por retornar todo o historico
app.get("/historico", (req, res) => {

    //Envia a lista completa de consultas em formato JSON
    res.json(historico);

});

//Método POST
//Utilizado para enviar informações para a API
app.post("/historico", (req, res) => {

    //Adiciona os dados recebidos pelo React ao vetor de histórico
    historico.push(req.body);

    res.json({
        mensagem: "Consulta salva!"
    });
});

//Inicia a API na porta 3000
app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000")
});