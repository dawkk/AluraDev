const languages = document.querySelector('[select-languages]');
const codeArea = document.querySelector('[code-text-area]');
const highlightButton = document.querySelector('[highlight-button]');

var highlightOnOff = false;

function applyHighlight () {
    const codeEditor = codeArea.innerText;
    codeArea.innerHTML = `<code class="middle__text hljs ${languages.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    codeArea.querySelector('code').textContent = codeEditor;
    hljs.highlightElement(codeArea.querySelector('code'));
}

highlightButton.addEventListener('click', () => {
    applyHighlight();
})



/*

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

tentando criar uma forma de desligar o highlight após ligado

highlightButton.addEventListener('click', () => {
    if(highlightOnOff) {
        highlightOff();
    } else {
        highlightOn();
    }
 })

 function highlightOn() {

    highlightButton.innerText = 'Remover o Highlight';
    highlightOnOff = true;
    applyHighlight ()
 }

 function highlightOff() {


    codeArea.innerHTML = `<code class="middle__text hljs ${languages.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    highlightButton.innerText = 'Visualizar com o Highlight';
    highlightOnOff = false;
    
 } */
