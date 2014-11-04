'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		/*Menus.addMenuItem('topbar', 'Consultool', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Consulting Questions', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'Create New Consulting Question', 'articles/create');*/
    
    Menus.addMenuItem('topbar', 'List', 'articles?');
    Menus.addMenuItem('topbar', 'Create','articles/create');
    
	}
]);