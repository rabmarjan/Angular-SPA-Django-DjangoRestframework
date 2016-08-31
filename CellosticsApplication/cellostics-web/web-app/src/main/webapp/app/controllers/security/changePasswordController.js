
'use strict';

define(['app'], function (app) {
    
	 var changePasswordController = function ($rootScope, $scope, _, $log, $timeout, $http, $cookieStore, signInService, 
		 navigationService, localStorageService, configurationService, constantService, authorizationService, 
		 messageService, loadService) {
		 
		 var promis, userInfo;
		 var userObj = { oldPassword : '', newPassword : '', confirmPassword : ''};
       
		 $scope.changePassword = function (user) {
			 if(!signInService.validateForm(user)){
				 return;
			 }
			 loadService.showDialog();
		     userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
			 userInfo.oldPassword = user.oldPassword;
			 userInfo.newPassword = user.newPassword;
			 userInfo.confirmPassword = user.confirmPassword;
			 userInfo.forLoginID = userInfo.loginID;
			 userInfo.operation = constantService.ChangePassword;
	    	 promis = signInService.postObject(userInfo);
			 promis.then(function (data) {
				 loadService.hideDialog();
	    		 if (!data.success) {
					 messageService.showMessage(constantService.Danger, data.code);
					 return;
				 }
				 messageService.showMessage(constantService.Success, data.code);
			 });
		 };
		 
		 $scope.resetChangePassword = function () {
			 $scope.user = angular.copy(userObj);
		 };
		 
		 var init = function () {
	 		
	 	 };

	 	 init();
		 
 	};

 	
    app.register.controller('changePasswordController', ['$rootScope', '$scope', '_','$log', '$timeout', '$http', '$cookieStore', 
        'signInService', 'navigationService', 'localStorageService', 'configurationService','constantService', 
        'authorizationService', 'messageService', 'loadService', changePasswordController]);
   
	
});














