(function(){

	var tabsNavigation  = document.querySelectorAll('.tabs-navigation');

	if (tabsNavigation.length > 0) {
		
		for (var i = 0; i < tabsNavigation.length; i++) {

			tabsNavigation[i].addEventListener('click', function(event) {

				// if target is link
				if (event.target.tagName === 'A') {

					// prevent adding hash at the end of the URL
					event.preventDefault();

					// remove selected class from navigation links
					this.querySelector('li.selected').classList.remove('selected');

					// add selected class to the target link
					event.target.parentElement.classList.add('selected');

					// make target selector string
					var targetHash 		= event.target.hash;
					var targetSelector 	= 'li' + targetHash;
					var tabsContent    	= this.nextElementSibling;

					// remove selected class from tabs content
					tabsContent.querySelector('li.selected').classList.remove('selected');

					// add selected class to the target tab content
					tabsContent.querySelector(targetSelector).classList.add('selected');
				}
			});			
		}
	}
})();