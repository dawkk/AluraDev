

const DB_STORE_NAME = ['projetos'];
const DB_VERSION = 1;
const DB_NAME = 'Aluradev';



let bd; // objeto para manipular o BD
let reqBD = indexedDB.open(DB_NAME, DB_VERSION); 

reqBD.onsuccess = () => {
    bd = reqBD.result;
}

reqBD.onerror = () => {
    console.log(reqBD.error);
};
reqBD.onupgradeneeded = (e) => {
    bd = reqBD.result;

    if (!bd.objectStoreNames.contains('projects')) {
        bd.createObjectStore('projects', {keyPath:'title', autoIncrement:true});
        };
    };

const codeEdt = document.querySelector('[code-editor]');
const projectName = document.querySelector('[project-name]');
const projectDsc = document.querySelector('[project-description]');
const projectLng = document.querySelector('[select-languages]');
const projectColor = document.querySelector('[selector-color]');
const btnSave = document.querySelector('[button-save]');

onload = () => {
    btnSave.onclick = () => {
        let project = {
            title:projectName.value,
            description: projectDsc.value,
            color:projectColor.value,
            language:projectLng.value,
            code: codeEdt.innerHTML
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


const items = await bd.transaction('projetos').objectStore.getAllKeys();


let projectList = [];
bd.transaction('projects')
  .objectStore('projects')
  .openCursor()
  .onsucess = function (ev) {
    let cursor = evento.target.result;
    if (cursor) {
      projectList.push(cursor.value);
      cursor.continue();
    } else {
      console.log(projectList);
    }
  }



// const fncSearch = document.querySelector('[search-bar]');
// // fncSearch.onclick = () => {
// //         bd.transaction('[projects]', 'readwrite')
// //           .objectStore('projects')
// //           .get(projectName.value)
// //           .onsuccess = (e) => {
// //             title.value = e.target.result.title;
// //             description.value = e.target.result.description;
// //             color.value = e.target.result.color;
// //             language.value = e.target.result.language;
// //           };
// //     };
//     fncSearch.addEventListener("keyup", function (searchEnter) {
//         bd.transaction('[projects]', 'readwrite')
//             .objectStore('projects')
//         if (searchEnter.keyCode === 13) {    
//             bd.get(projectName.value)
//                 title.value = e.target.result.title;
//                 description.value = e.target.result.description;
//                 color.value = e.target.result.color;
//                 language.value = e.target.result.language;
//         };
//     });










