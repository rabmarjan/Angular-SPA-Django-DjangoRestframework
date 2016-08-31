
'use strict';

define(['app','services/utils/navigationService'], function (app) {

    var navigationService = function ($location) {
    	
		this.menuNavigation = function (navUrl) { 
			$location.path('/'+navUrl); 
		};
		
		this.showPageWithData = function (url, id) {
	    	$location.path('/'+url+'/'+id);
	    };
	    
	    this.showPageWithTwoParam = function (url, param1, param2) {
	    	$location.path('/'+url+'/'+param1+'/'+param2);
	    };
	    
	    this.showPageWithThreeParam = function (url, param1, param2, param3) {
	    	$location.path('/'+url+'/'+param1+'/'+param2+'/'+param3);
	    };
    	
    };
    
    app.service('navigationService', ['$location', navigationService]);

});
