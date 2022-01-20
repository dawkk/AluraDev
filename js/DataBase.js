

const STORES = ['projetos'];
const VERSION = 1;
const DBNAME = 'aluradev';

const btnSave = document.querySelector('[button-save]');

const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('AluraDev', 1);
  
    DBOpenReq.addEventListener('error', (err) => {
      //Error occurred while trying to open DB
      console.warn(err);
    });

    DBOpenReq.addEventListener('success', (ev) => {
      //DB has been opened... after upgradeneeded
      db = ev.target.result;
      console.log('success', db);
    });

    DBOpenReq.addEventListener('upgradeneeded', (ev) => {
      //first time opening this DB
      //OR a new version was passed into open()
      db = ev.target.result;
      let oldVersion = ev.oldVersion;
      let newVersion = ev.newVersion || db.version;
      console.log('DB updated from version', oldVersion, 'to', newVersion);
  
      console.log('upgrade', db);
      if (!db.objectStoreNames.contains('projectStore')) {
        objectStore = db.createObjectStore('projectStore', {
          keyPath: 'projectID',
        });
      }
    });
  
    btnSave.addEventListener('submit', (ev) => {
      ev.preventDefault();
      //one of the form buttons was clicked

      let projectName = document.querySelector('[project-name]').value;
      let projectDescription = document.querySelector('[project-description]').value;
      let projectColor = document.querySelector('[selector-color]').value;
      let projectLanguage = document.querySelector('[select-languages]').value;
      let codeEditor = document.querySelector('[code-editor]').value;

      let project = {
          projectID:projectName,
          projectDescription,
          projectColor,
          projectLanguage,
          codeEditor,
      };

      let transactionBD = makeTS('projectStore', 'readwrite');transactionBD.oncomplete = (ev) => {
      console.log(ev);
      //buildList()
    };

      let store = transactionBD.objectStore('projectStore');
      let request = store.add(project);

      request.onsucess = (ev) => {
          console.log('sucessfully added an object');
      };

      request.onerror = (ev) => {
          console.log('error in request to add :/');
      };
    });

    function makeTS(storeName, mode){
        let transactionBD = db.transaction(storeName, mode);
        transactionBD.onerror = (err) =>{
            console.warn(err);
        };
        return transactionBD;
    };

  })();