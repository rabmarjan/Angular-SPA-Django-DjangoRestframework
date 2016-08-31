
'use strict';

define(['app'], function (app) {
    
	 var webRightPanelController = function ($rootScope, $scope, $log, $http, $location, $route, 
		navigationService, configurationService, localStorageService,constantService, localize, 
		modalService) {
		 
		var userInfo, promis;
		
		$scope.show = function (notice) {
			window.open(notice.filePath, '_blank');
        };
		
        $scope.navigatePage = function(url){
			navigationService.menuNavigation(url);
		}
    	
		var init = function () {
			
			
	    }; 
	    
	    init();
		 
	 };    
	 
	 app.controller('webRightPanelController', ['$rootScope', '$scope', '$log', '$http', '$location', '$route', 
     'navigationService', 'configurationService', 'localStorageService', 'constantService', 'localize','modalService', 
     webRightPanelController]);
	
});

