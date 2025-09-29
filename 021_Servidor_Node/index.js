const express = require('express');
const app = express();

//função anonima
const pgPrincipal = function (req, res) {
    res.send('<h1> Bem vindo ao Servidor Node.js com Express!</h1>');
}
const pgSobre = function (req, res) {
    res.send('<h1> Página sobre o nosso site</h1>');
}


const usuario = ["Barreto", "Gb10", "Boldo", "Lipe"];
app.get('/usuarios', (req, res) => {
    let html = '<h1>Lista de Usuários:</h1>';
    html = html + '<ul>';
    for (let usuarioAtual of usuario) {
        html += `<li>${usuarioAtual}</li>`;
    }
    html = html + '</ul>';
    res.send(html);

});

//Rota Principal
app.get('/', pgPrincipal);
app.get('/sobre', pgSobre);

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuarioSel = usuario[id];
    if (usuarioSel == undefined) {
        res.send('Usuário não encontrado');
    } else {
        res.send(`Você está vizualizando o perfil do id: ${id} do usuário: ${usuarioSel}`);
    }
})

app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 + n2;
    res.send(`A soma de ${n1} + ${n2} = ${resultado}`);
})

app.get('/menu', (req, res) => {
    let html = `
    <h1>Menu</h1>
    <a href="/">Principal 🏠</a> <br>
    <a href="/sobre">Sobre 👀</a> <br>
    <a href="/usuarios">Usuários 👬</a> <br>
    <a href="/usuarios/1">Usuário 1 🧙‍♂️</a> <br>
    <a href="/usuarios/7">Usuário Indefinido 🧙‍♀️</a> <br>
    <a href="/soma/1/7"> soma 🙌</a> <br>
    
    `;
    res.send(html);
    
})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})