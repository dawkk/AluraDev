const projectsList = storeGet.getItem("projects")|| '[]');
const projectsContainer = document.querySelector('[js-community-container]')

// let transactBD = bd.transaction(['projects'], 'readwrite');
// let projectsOS = transactBD.objectStore('projects');
// let projectsList = projectsOS.getAll(); 



projectsList.forEach((project, index) => {
  const projectItem = document.createElement('li');
  // projectItem.classList.add('editor__container')
  projectItem.innerHTML = `<div class="community__frame" js-frame-color>  
  <div class="community__background">  
      <img class=".community__icons" src="imagens/bola_vermelha.svg">    
      <img class=".community__icons" src="imagens/bola_verde.svg">   
      <img class=".community__icons" src="imagens/bola_amarela.svg">
      <div class="community__editorCode">     
          <pre><code class="community__text hljs javascript"></code></pre>
      </div> 
  </div> 
</div>
  <div class="community__details">
      <h1 class="community__title">${project.title}
      </h1>
      <p class="community__description">${project.description}
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
  </div>`;
  projectsContainer.appendChild(projectItem);
  const projectCodeContent = projectsContainer.querySelectorAll('.community__editorCode');
  projectCodeContent[index].innerHTML = project.code;
  const projectCodeBorder = document.querySelectorAll('[js-frame-color]');
  projectCodeBorder[index].style.borderColor = project.color;
})