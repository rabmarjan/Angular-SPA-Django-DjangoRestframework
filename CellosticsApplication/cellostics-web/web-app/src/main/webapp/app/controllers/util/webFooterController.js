
'use strict';

define(['app'], function (app) {
    
	 var webFooterController = function ($rootScope, $scope, $log, $http, $location, $route, 
		navigationService, configurationService, localStorageService,constantService, localize) {
		 
		var userInfo, promis;
    	
    	$scope.goToTop = function(){
    		$('body,html').animate({
				scrollTop: 0
			}, 500);
    	};
		 
		var init = function () {
			
		}; 
	    
	    init();
		 
	 };    
	 
	 app.controller('webFooterController', ['$rootScope', '$scope', '$log', '$http', '$location', '$route', 
     'navigationService', 'configurationService', 'localStorageService', 'constantService', 'localize', webFooterController]);
	
});

