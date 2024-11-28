let carrinho = [];

// Adicionar produto ao carrinho
document.querySelectorAll('.comprar').forEach(button => {
    button.addEventListener('click', (e) => {
        const produto = e.target.closest('.produto');
        const id = produto.getAttribute('data-id');
        const nome = produto.querySelector('h2').textContent;
        const preco = produto.querySelector('p').textContent;

        carrinho.push({ id, nome, preco });
        alert(`${nome} foi
