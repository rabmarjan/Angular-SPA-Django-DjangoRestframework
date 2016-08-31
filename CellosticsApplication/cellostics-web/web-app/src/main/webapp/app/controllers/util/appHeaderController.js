
'use strict';

define(['app'], function (app) {
    
	 var appHeaderController = function ($rootScope, $scope, $log, $window, localStorageService, 
			 constantService, navigationService, $http, $location, signInService) {
		 
		 var userInfo, promis;
		 
		 $scope.myInterval = 1000*5;
		 $scope.slides = [
		 {
		 image: 'images/roads/01.jpg'
		 },{
			 image: 'images/roads/02.jpg'
		 }];
	    	
		$scope.logout = function (logoutObj) {		
        	userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
        	userInfo.operation = constantService.logout;
            promis = signInService.postObject(userInfo);
            promis.then(function (data) {
                localStorageService.setValue(constantService.userInfoCookieStoreKey, null);
                $rootScope.$broadcast(constantService.NoticeLoadMessage, constantService.NoticeLoadMessage);
                $location.path('/');
                $location.replace();
            });
        };


        var init = function () {
			userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
        	$scope.loggedinUserInfo = userInfo;
			/*$scope.webLeftMenus = $.parseJSON(userInfo.menuJSON);
			$scope.logoutObj = $scope.webLeftMenus[$scope.webLeftMenus.length-1];
			$scope.webLeftMenus.pop();*/
	    }; 
	    
	    init();
       
		 
    };

    app.controller('appHeaderController', ['$rootScope', '$scope', '$log', '$window', 'localStorageService',
    'constantService', 'navigationService', '$http', '$location', 'signInService', appHeaderController]);
   
	
});














