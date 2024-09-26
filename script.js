let produtos = [];
let receitas = [];

function adicionarProduto() {
    const nome = document.querySelector('#adicaoProduto input[type="text"]').value;
    const quantidade = document.querySelector('#adicaoProduto input[type="number"]').value;
    const vencimento = document.querySelector('#adicaoProduto input[type="date"]').value;

    produtos.push({ nome, quantidade, vencimento });
    alert(`Produto ${nome} adicionado!`);
}

function removerProduto() {
    const nome = document.querySelector('#remocaoProduto input[type="text"]').value;
    produtos = produtos.filter(produto => produto.nome !== nome);
    alert(`Produto ${nome} removido!`);
}

function adicionarReceita() {
    const nome = document.querySelector('#adicaoReceita input[type="text"]').value;
    receitas.push(nome);
    alert(`Receita ${nome} adicionada!`);
}

function removerReceita() {
    const nome = document.querySelector('#remocaoReceita input[type="text"]').value;
    receitas = receitas.filter(receita => receita !== nome);
    alert(`Receita ${nome} removida!`);
}

function sugerirReceitas() {
    const sugestao = receitas.length > 0 ? `Sugestões: ${receitas.join(', ')}` : 'Nenhuma receita cadastrada.';
    document.getElementById('receitasSugestao').innerText = sugestao;
}

function regulaTemperatura() {
    const temp = document.querySelector('#controleTemperatura input[type="number"]').value;
    alert(`Temperatura ajustada para ${temp}°C!`);
}

function exibirCompras() {
    const compras = produtos.length > 0 ? produtos.map(prod => `${prod.nome} (${prod.quantidade})`).join(', ') : 'Nenhum produto.';
    document.getElementById('lista').innerText = compras;
}

function verificarValidade() {
    const alertas = produtos.filter(produto => new Date(produto.vencimento) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
    document.getElementById('alertas').innerText = alertas.length > 0 ? alertas.map(p => `${p.nome} está perto da validade`).join('\n') : 'Todos os produtos estão válidos.';
}

function tocarMusica() {
    alert('Tocando música!');
}
