const listaProjetos = document.querySelector('[js-community-container]')

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if(localStorage.length <= 0) {
        return
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto)
        listaProjetos.innerHTML += cartao
        const codigoHtml = listaProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function criaCartao(projeto) {
    const cartao =  `
    <div class="community__spacing__cards" data-id="${projeto.id}">
    <div class="community__frame" style="background-color:${projeto.detalhesDoProjeto.corDoProjeto}">  
    <div class="community__background">  
        <img class=".community__icons" src="imagens/bola_vermelha.svg">    
        <img class=".community__icons" src="imagens/bola_verde.svg">   
        <img class=".community__icons" src="imagens/bola_amarela.svg">
        <div class="community__editorCode">     
            <pre><code class="community__text hljs ${projeto.detalhesDoProjeto.linguagem}"></code></pre>
        </div> 
    </div> 
  </div>
    <div class="community__details">
        <h1 class="community__title">${projeto.detalhesDoProjeto.nomeDoProjeto}
        </h1>
        <p class="community__description">${projeto.detalhesDoProjeto.linguagem}
        </p>
        <p class="community__description">${projeto.detalhesDoProjeto.descricaoDoProjeto}
        </p>
  
        <div class="community__interaction">
            <button type="button" class="community__interaction-styling">
                <i class="fas fa-comment community__icon"></i>
                <p class="community__number comment-number" >12
  
                </p>
            </button>
  
            <button class="community__interaction-styling like">
                <i class="fas fa-heart community__icon"></i>
                <p class="community__number">20</p>
            </button>
  
            <button class="community__author"> 
                <img class="community__author__photo" src="imagens/Foto_Usuario_2x.png" alt="Foto usuario">
                <p class="community__author__name">@Harry</p>
            </button>
  
        </div>
    </div>
    </div>`;
    return cartao
}