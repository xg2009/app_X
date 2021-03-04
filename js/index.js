/* 	
	Registre del Service Worker per a que l'app funcioni offline
	EDITAR: 
		path del Service Worker
			/app_X/sw.js
		missatges consola	

*/
	if ('serviceWorker' in navigator) {
	  navigator.serviceWorker
		.register('/app_X/sw.js')
		.then(() => { console.log('Service Worker registrat'); });
	}

// 	Pregunta a l'usuari si vol instal·lar l'app
// 	COMPTE! --> 	el botó està amagat i només es mostra quan l'app no ha estat registrada
// 					per fer proves l'haurem de podar en dispay:block
	let deferredPrompt;
	const addBtn = document.querySelector('.add');
	// addBtn.style.display = 'block';
	addBtn.style.display = 'none';
	
	
	
///////////////////////////////////////////////////////////////////////////////////////
	window.addEventListener('beforeinstallprompt', (e) => {
	  // Prevent Chrome 67 and earlier from automatically showing the prompt
	  e.preventDefault();
	  // Stash the event so it can be triggered later.
	  deferredPrompt = e;
	  // Mostra el botó si l'app no ha estat registrada abans
	  addBtn.style.display = 'block';

	  addBtn.addEventListener('click', () => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
		  if (choiceResult.outcome === 'accepted') {
			console.log('Accepted');
		  } else {
			console.log('Refused');
		  }
		  deferredPrompt = null;
		});
	  });
	});
