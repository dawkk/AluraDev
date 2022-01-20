

const DB_STORE_NAME = ['projetos'];
const DB_VERSION = 1;
const DB_NAME = 'Aluradev';

const btnSave = document.querySelector('[button-save]');

const IDB = (function init() {
    let db = null;
    let objectStore = null;
    let DBOpenReq = indexedDB.open('DB_NAME', 2);
  
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
        objectStore = db.createObjectStore('projectStore', {autoIncrement:true, keyPath: 'projectID'});
      };
    });
  
    btnSave.onclick = () => {
      let projectName = document.querySelector('[project-name]');
      let projectDescription = document.querySelector('[project-description]');
      let projectColor = document.querySelector('[selector-color]');
      let projectLanguage = document.querySelector('[select-languages]');
      let codeEditor = document.querySelector('[code-editor]');

      let project = {
          projectID:projectName.value,
          description:projectDescription.value,
          color:projectColor.value,
          language:projectLanguage.value,
          code:codeEditor.value

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
    };

    // not sure if applicable 
    // function buildList() {
    //   let transactionBD = makeTS('projectStore', 'readwrite');
    //   transactionBD.oncomplete = (ev) => {
    //     //transaction for reading all objects is complete
    //   };
    //   let store = transactionBD.objectStore('projectStore');
    //   let getReq = store.getAll();
    //   //returns an array
    //   //option can pass in a key or a keyRange
    //   getReq.onsucess = (ev) => {
    //     //getAll was successful
    //     let request = ev.target; //request === getReq === ev.target
    //     console.log({request});
    //   }

    document.querySelector('[project-description]').addEventListener('click', (ev) => {
      let getData = ev.target.closest('[data-key]');
      let id = getData.getAtrribute('data-key');
      console.log(getData, id);

      let transactionBD = makeTS('projectStore', 'readwrite');
      transactionBD.oncomplete = (ev) => {
        //get transaction complete
      };
      
      let store = transactionBD.objectStore('projectStore');
      let reqData = store.get(id);
      reqData.onsucess = (ev) => {
        let request = ev.target;
        let project = request.result;
        document.querySelector('[project-description]').value = project.description;
        document.querySelector('[selector-color]').value = project.color;
        document.querySelector('[select-languages]').value = project.language;
        document.querySelector('[code-editor]').value = project.code;
        document.querySelector('[project-name]').setAttribute('data-key', project.id);
      };
      reqData.onerror = (err) => {
        console.warn(err);
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