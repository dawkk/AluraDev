
let bd; // objeto para manipular o BD
let reqBD = indexedDB.open('aluraDev', 2); 
reqBD.onsuccess = () => {
    bd = reqBD.result;
}
reqBD.onerror = () => {
    console.log(reqBD.error);
};
reqBD.onupgradeneeded = (e) => {
    bd = reqBD.result;
    if (!bd.objectStoreNames.contains('projects')) {
        bd.createObjectStore('projects', {keyPath:'title'});
        //será que ao invés de id no meu caso seria 'name'?
        };
    };

const codeEdt = document.querySelector('[code-editor]');
const projectName = document.querySelector('[project-name]');
const projectDsc = document.querySelector('[project-description]');
const projectLng = document.querySelector('[select-languages]');
const projectColor = document.querySelector('[selector-color]')
;
const btnSave = document.querySelector('[button-save]');

onload = () => {
    btnSave.onclick = () => {
        let project = {
            code: codeEdt.value,
            title:projectName.value,
            description: projectDsc.value,
            color:projectColor.value,
            language:projectLng.value
        };
        let transactBD = bd.transaction(['projects'], 'readwrite');
        let projectsOS = transactBD.objectStore('projects');
        let reqOS = projectsOS.add(project);
        reqOS.onsucess = (e) => {
            console.log(reqOS.result);
        };
        reqOS.onerror = (e) => {
            console.log(reqOS.error);
        };
    };
};


/* 

    tentando implementar esta parte ainda
    
const fncSearch = document.querySelector('[search-bar]');

fncSearch.onclick = () => {
        bd.transaction('[projects]', 'readwrite')
          .objectStore('projects')
          .get(projectName.value)
          .onsuccess = (e) => {
            title.value = e.target.result.title;
            description.value = e.target.result.description;
            color.value = e.target.result.color;
            language.value = e.target.result.language;
          };
    };

    fncSearch.addEventListener("keyup", function (searchEnter) {
        if (searchEnter.keyCode === 13) {
            searchProject();
        };
    });
     */










