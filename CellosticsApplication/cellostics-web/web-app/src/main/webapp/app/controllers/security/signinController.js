
'use strict';

define(['app'], function (app) {
    
	 var signinController = function ($rootScope, $scope, _, $log, $timeout, $http, $cookieStore, signInService, constantJSON, 
		 navigationService, localStorageService, configurationService, constantService, authorizationService, 
		 messageService) {
		 
		 var userInfo, promis;
		 var accounts =  {};
		 $scope.login = { username : 'marjan', password : '1234qwer' };
		 $scope.msg = {"login" : { "value" : "Df1000", "isShow" : false }, "password" : { "value" : "Df1000", "isShow" : false }};
       
		 $scope.signIn = function (login) {			 
			 localStorageService.setValue(constantService.userInfoCookieStoreKey, login.username);
			 promis = signInService.postObject(login);
			 promis.then(function (data) {
				 if (!data.success) {
					 return;
				 }
				 console.log(data);
				 var menuJson = $.parseJSON(data.roleJSON).categories;
				 localStorageService.setValue(constantService.menuInfoCookieStoreKey, menuJson);
				 navigationService.menuNavigation("dashboard");
			 });
		 };
		 
	 	var init = function () {
	 	};

	 	init();
 	};
 	
    app.register.controller('signinController', ['$rootScope', '$scope', '_','$log', '$timeout', '$http', '$cookieStore', 
        'signInService', 'constantJSON', 'navigationService', 'localStorageService', 'configurationService','constantService', 
        'authorizationService', 'messageService', signinController]);
   
	
});














