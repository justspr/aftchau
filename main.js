function Criarcartão (categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.getElementById('article');
    cartao.className= 'cartao'
    cartao.innerHTML=`<div class="conteudo-caartao">
        <h3>categoria</h3>
        <div class="pergunta-caartao"></div>
        <p>pergunta</p>
        <div class="resposta-caartao"></div>
        <p>resposta</p>
    </div>
    `
    
    }