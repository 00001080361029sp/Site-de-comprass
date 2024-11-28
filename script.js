// Função para salvar o carrinho no localStorage
function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para carregar o carrinho do localStorage
function carregarCarrinho() {
    const carrinho = localStorage.getItem('carrinho');
    return carrinho ? JSON.parse(carrinho) : [];
}

// Inicializa o carrinho com dados salvos
let carrinho = carregarCarrinho();

// Adicionar produto ao carrinho
document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', (e) => {
        const produto = e.target.closest('.produto');
        const id = produto.getAttribute('data-id');
        const nome = produto.querySelector('h2').textContent;
        const preco = produto.querySelector('p').textContent;

        carrinho.push({ id, nome, preco });
        salvarCarrinho(carrinho);
        alert(`${nome} foi adicionado ao carrinho!`);
    });
});

// Exibir itens do carrinho na página do carrinho
if (window.location.pathname.includes('carrinho.html')) {
    const lista = document.getElementById('carrinho-lista');
    const totalEl = document.getElementById('carrinho-total');
    const botaoLimpar = document.getElementById('limpar-carrinho');

    let total = 0;

    // Adicionar os itens ao HTML
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.nome}</span><span>${item.preco}</span>`;
        lista.appendChild(li);

        // Calcular o total
        total += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;

    // Limpar o carrinho
    botaoLimpar.addEventListener('click', () => {
        carrinho = [];
        salvarCarrinho(carrinho);
        lista.innerHTML = '';
        totalEl.textContent = 'Total: R$ 0,00';
        alert('Carrinho limpo com sucesso!');
    });
}
