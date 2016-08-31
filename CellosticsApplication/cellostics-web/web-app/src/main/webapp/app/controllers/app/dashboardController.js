
'use strict';

define(['app'], function (app) {
    
    var dashboardController = function ($scope, $location, $filter, $log, constantService, 
		localStorageService, messageService, constantJSON, navigationService) {
    	
    	$scope.title = "Report: Admin Panel";
		
		 $scope.misReportJSON = [];
		 $scope.ReportJSON = [];
		 var promis;
		
		 $scope.performClickAction = function(pagelink){
	        	navigationService.menuNavigation(pagelink);
	        };
       
		 var getMISReportJSON = function () {
			 //$scope.misReportJSON = constantJSON.misReportJSONAdmin;
			 $scope.ReportJSON =  localStorageService.getValue(constantService.menuInfoCookieStoreKey);
			 //console.log($scope.ReportJSON);
		 };
       
		 var init = function () {			
			 getMISReportJSON();
		 };
		 
		 init();
        
    };
    
    
    
    app.register.controller('dashboardController', ['$scope', '$location', '$filter', '$log',
    'constantService', 'localStorageService', 'messageService', 'constantJSON', 'navigationService', dashboardController]);

});


