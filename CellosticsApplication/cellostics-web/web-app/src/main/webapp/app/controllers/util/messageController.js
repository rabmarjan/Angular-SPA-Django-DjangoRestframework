
'use strict';

define(['app'], function (app) {
    
	 var messageController = function ($rootScope, $scope, $timeout, constantService, messageService) {
		 
		 $scope.alerts = [];
		 var promise; 
		 
		 $scope.closeMessage = function() {
			 $scope.alerts.splice(0, 1);
		 };
		 
		 
		 $scope.$on(constantService.AlertMessage, function (event, messageObj) {
			 $scope.alerts = [];
			 $scope.alerts.push(messageObj);
		 });

		 
		 var init = function () {
			 
		 };

		 init();
       
		 
    };

    app.controller('messageController', ['$rootScope', '$scope', '$timeout', 'constantService', 'messageService',
          messageController]);
   
	
});


