	iniciarHammer = function(){ 
	/////////////////////////////////////////////////////////////////	
	
    // 	1 Definim l'element al que assignarem el gest
        var divTap = document.getElementById("divTap"); 
		
	// 	2 Creem l'objecte Hammer vinculat a l'element
        var divTapE = new Hammer(divTap);
	
	//	Ho fem així per simplificar, també es podria fer així:
	//  var divTapE = new Hammer(document.getElementById("divTap"));
		
		
		var divDTap = document.getElementById("divDTap"); 
        var divDTapE = new Hammer(divDTap);
		
		var divSwipeH = document.getElementById("divSwipeH"); 
        var divSwipeHE = new Hammer(divSwipeH);
		
		var divSwipeV = document.getElementById("divSwipeV"); 
        var divSwipeVE = new Hammer(divSwipeV);
        
        
    //	DETECCIÓ EVENTS
		
        divTapE.on('tap', function(ev){
			ev.preventDefault();
            divTap.innerHTML = "Event: " + ev.type;
        });
		
		
		divDTapE.on('doubletap', function(ev){
			ev.preventDefault();
            divDTap.innerHTML = "Event: " + ev.type;
        });
        
	//	SWIPE Horitzontal
        divSwipeHE.on('swipe', function(ev){    //Detectem la direcció del swipe TAMBÉ: swiperight swipeleft
			ev.preventDefault();
			if(ev.direction == 4){ //dreta				
				divSwipeH.innerHTML = "Event: " + ev.type + " / direcció: " + ev.direction + " (dreta)";		
			};
			
            if(ev.direction == 2){ //esquerra				
				divSwipeH.innerHTML = "Event: " + ev.type + " / direcció: " + ev.direction + " (esquerra)";
			};
			
        });
		
		
	// 	SWIPE vertical => cal canviar a vertical
		divSwipeVE.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
		
	// 	Detectar un o més events en el mateix on
		divSwipeVE.on('swipeup swipedown', function(ev) {
			ev.preventDefault();
			if (ev.type == 'swipeup') {
			    divSwipeV.innerHTML = "Event: " + ev.type + " / direcció: " + ev.direction + " (dalt)";			
			} else {
				divSwipeV.innerHTML = "Event: " + ev.type + " / direcció: " + ev.direction + " (baix)";
			}
		});





	//////////////////////////////////////////////////////////////////
    }