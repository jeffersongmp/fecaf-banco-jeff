const express = require('express');
const path    = require('path');
const config = require ('config');
const { get } = require('config');

const port = process.env.PORT || config.get('server.port')
const lancamentos = [
    {
     data: '2021-03-10',
     descricao:'pagamento',
     valor: -200
        },
    {
    data: '2021-03-15',
    descricao:'gasolina',
    valor: -100.00
    },
    {
    data: '2021-03-20',
    descricao:'mercado',
    valor: -243.55
       },
    ]
const app = express();

app.set('port',port);

app.route('/extrato').get(
    (req,res) => {
        res.status(200).json(lancamentos)
    }
)

app.listen(port, () => {
    console.log("Serviço Iniciado na porta !" + port);
})

console.log("Serviço Iniciado !")

