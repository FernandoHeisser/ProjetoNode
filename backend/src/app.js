const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
    Métodos HTTP:

    GET - Buscar uma informação do back-end
    POST - Criar uma informação do back-end
    PUT - Altera uma informação do back-end
    DELETE - Deleta uma informação do back-end
*/

/*
    Tipos de Parâmetros:

    Query Params - localhost:3333/users?nome=fernando&idade=20
    Route Params - localhost:3333?nome=fernando&idade=20
*/


//app.listen(3333);
module.exports = app;