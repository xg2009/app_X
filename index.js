/**********************************************************************
  EDITAR: 
    1 el nom del directori on tenim hostatjada l'app
      en el aquest cas és 'app_XG' (https://xg2009.github.io/app_XG)
          .register('/       /sw.js')
    2 els missatges de la consola
**********************************************************************/

// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/app_XG/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  /*************************************************************
  compte que el botó està amagat si ja hem fet la insal·lació
  *************************************************************/
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Acceptat');
      } else {
        console.log('Rebutjat');
      }
      deferredPrompt = null;
    });
  });
});


window.addEventListener('appinstalled', (e) => {
	
	alert("App instal·lada") ;
	
})
