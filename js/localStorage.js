const codeEdt = document.querySelector('[code-editor]');
const projectName = document.querySelector('[project-name]');
const projectDsc = document.querySelector('[project-description]');
const projectLng = document.querySelector('[select-languages]');
const projectColor = document.querySelector('[selector-color]');
const btnSave = document.querySelector('[button-save]');
const btnPreview = document.querySelector('[highlight-button]');


projectLng.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = {'texto': codeEdt.querySelector('code').innerText}
    codeEdt.innerHTML = `<code class="middle__text hljs code ${projectLng.value}" contenteditable="true" aria-label="editor"></code>`
    codeEdt.firstChild.innerText = codigo.texto
}

btnSave.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        console.log('Yay, support!')
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
    } else {
        console.log('Nay, no support!')
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': projectName.value,
            'descricaoDoProjeto': projectDsc.value,
            'linguagem': projectLng.value,
            'codigo': codeEdt.innerHTML,
            'corDoProjeto':projectColor.value
        }
    }
    return projeto
}

let numeroId = 1

if(localStorage.length > 0) {
    numeroId = localStorage.length
}

function atribuiId() {
    if(localStorage.length == 0) {
        return 0
    } else {
        if(localStorage.length == numeroId) {
            let novoId = numeroId
            numeroId++
            return novoId
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}

