
'use strict';

define(['app'], function (app) {
    
	 var webHeaderController = function ($rootScope, $scope, $log, $http, $location, $route, 
		navigationService, configurationService, localStorageService, constantService, localize, 
		loadService, messageService) {
		 
		var userInfo, promis;
		
		$scope.myInterval = 1000*5;
	       $scope.slides = [
	         {
	           image: 'images/roads/01.jpg'
	         },{
	           image: 'images/roads/01.jpg'
	         }];

		
		var loadTopMenu = function(){
			$http.get('config/menu.json').success(function(data) {
				$scope.webLeftMenus = data;
				$scope.loginObj = $scope.webLeftMenus[$scope.webLeftMenus.length-1];
				$scope.webLeftMenus.pop();
				loadSubMenu();
		    });
		}
		
		var loadSubMenu = function(){
			$http.get('config/topMenu.json').success(function(data) {
				$scope.webTopMenus = data;
			});
		}
		 
		var init = function () {
			loadTopMenu();
			
		}; 
	    
	    init();
		 
	 };    
	 
	 app.controller('webHeaderController', ['$rootScope', '$scope', '$log', '$http', '$location', '$route', 
     'navigationService', 'configurationService', 'localStorageService', 'constantService', 'localize', 
     'loadService',  'messageService', webHeaderController]);
	
});

