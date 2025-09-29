const express = require('express');
const app = express();


const produtos = ["Notebook", "Mouse", "Teclado"];

app.get("/", (req, res) => {
    res.send("<h1>Bem-vindo!</h1>");
});

app.get("/produtos", (req, res) => {
    res.send(produtos);
});

app.get("/produto/:id_produto", (req, res) => {
    const id_produto = parseInt(req.params.id);
    if (id_produto >= 0 && id_produto < produtos) {
        res.send(`Produto: ${produtos[id_produto]}`);
    } else {
        res.send("Produto não encontrado");
    }
});

app.get("/total/:id_produto/:preco/:qtde", (req, res) => {
    const id_produto = parseInt(req.params.id);
    const preco = parseFloat(req.params.preco);
    const qtde = parseFloat(req.params.qtde);

    if (id_produto >= 0 && id_produto < produtos) {
        const total = preco * qtde;
        res.send(
            `Produto: ${produtos[id_produto]} | Preço: ${preco} | Quantidade: ${qtde} | Total: ${total}`
        );
    } else {
        res.send("Produto não encontrado");
    }
});

app.get("/menu", (req, res) => {
    res.send(`
    Menu: <br>
    <a href="/">Início</a> <br>
    <a href="/produtos">Produtos</a> <br>
    <a href="/produto/0">Produto por ID</a> <br>
    <a href="/total/0/100/2">Calcular Total</a> <br>
  `);
});


const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})
