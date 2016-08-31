
'use strict';

define(['app'], function (app) {
    
	 var appLeftMenuController = function ($rootScope, $scope, $log, $http, $location, $route, 
		navigationService, configurationService, localStorageService,constantService, localize,
		authorizationService) {
		 
		var userInfo, promis;
		
		$scope.toggleFirstMenu = function(levelId, totalChild){
			if(totalChild != undefined && totalChild > 0){
            	$('#'+levelId).toggleClass('active').children('ul').collapse('toggle');
				return;
			}
            if(levelId != undefined && levelId.trim().length != 0 && levelId.trim() != 'logout'){
				navigationService.menuNavigation(levelId);
            } else {
            	authorizationService.signOut();
            }
		};
		
		$scope.toggleSecondMenu = function(levelId, totalChild){
			if(totalChild != undefined && totalChild > 0){
				$('#'+levelId).toggleClass('active').children('ul').collapse('toggle');
				return;
			}
			if(levelId != undefined || levelId.trim().length != 0){
				userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
				userInfo.selectedLeftMenu = levelId;
				$scope.selectedLeftMenu = userInfo.selectedLeftMenu;
				localStorageService.setValue(constantService.userInfoCookieStoreKey, userInfo);
	    		navigationService.menuNavigation(levelId);
            }
		};
		
		$scope.toggleThirdMenu = function(levelId){
			if(levelId != undefined || levelId.trim().length != 0){
				navigationService.menuNavigation(levelId);
			}
		};
		 
		var init = function () {			
			userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
    		$scope.selectedLeftMenu = userInfo.selectedLeftMenu;
    		$scope.appLeftMenus = localStorageService.getValue(constantService.menuInfoCookieStoreKey);
	    }; 
	    
	    init();
		 
	 };    
	 
	 app.controller('appLeftMenuController', ['$rootScope', '$scope', '$log', '$http', '$location', '$route', 
     'navigationService', 'configurationService', 'localStorageService', 'constantService', 'localize', 
     'authorizationService', appLeftMenuController]);
	
});

