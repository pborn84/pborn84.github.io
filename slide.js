		// This simple function returns object reference for elements by ID
		function _(x){return document.getElementById(x);}
		// Variables for bubble array, bubble index, and the setInterval() variable
		var ba, bi=0, intrvl;
		// bca - Bubble Content Array. Put your content here.
		var bca = [
		    '<div class="img"><img src="img/foto01.jpg"></div>',
			'<div class="img"><img src="img/foto02.jpg"></div>',
			'<div class="img"><img src="img/foto03.jpg"></div>',
			'<div class="img"><img src="img/foto04.jpg"></div>',
			'<div class="img"><img src="img/foto05.jpg"></div>',
			'<div class="img"><img src="img/foto06.jpg"></div>'
		];
		// This function is triggered by the bubbleSlide() function below
		function bubbles(bi){
			// Fade-out the content
			_("bubblecontent").style.opacity = 0;
			// Loop over the bubbles and change all of their background color
			for(var i=0; i < ba.length; i++){
				ba[i].style.background = "rgba(0, 0, 0, 0.6)";
			}
			// Change the target bubble background to be darker than the rest
			ba[bi].style.background = "#fff";
			// Stall the bubble and content changing for just 300ms
			setTimeout(function(){
				// Change the content
				_("bubblecontent").innerHTML = bca[bi];
				// Fade-in the content
				_("bubblecontent").style.opacity = 1;
			}, 500);
		}
		// This function is set to run every 5 seconds(5000ms)
		function bubbleSlide(){
			bi++; // Increment the bubble index number
			// If bubble index number is equal to the amount of total bubbles
			if(bi == ba.length){
				bi = 0; // Reset the bubble index to 0 so it loops back at the beginning
			}
			// Make the bubbles() function above run
			bubbles(bi);
		}
		// Start the application up when document is ready
		window.addEventListener("load", function(){
			// Get the bubbles array
			ba = _("bubbles").children;
			// Set the interval timing for the slideshow speed
			intrvl = setInterval(bubbleSlide, 5000);
		});