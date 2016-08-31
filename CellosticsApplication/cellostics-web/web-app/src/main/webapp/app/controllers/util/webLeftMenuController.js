
'use strict';

define(['app'], function (app) {
    
	 var webLeftMenuController = function ($rootScope, $scope, $log, $http, $location, $route, 
		navigationService, configurationService, localStorageService, constantService, localizesignInService) {
		 
		var userInfo, promis;
		
		$scope.navigatePage = function(url){
			navigationService.menuNavigation(url);
		};
		 
		var init = function () {
			
	    }; 
	    
	    init();
		 
	 };    
	 
	 app.controller('webLeftMenuController', ['$rootScope', '$scope', '$log', '$http', '$location', '$route', 
     'navigationService', 'configurationService', 'localStorageService', 'constantService', 'localize', webLeftMenuController]);
	
});

