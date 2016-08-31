
'use strict';

define(['app'], function (app) {
    
	 var billCollectionController = function ($rootScope, $filter, $scope, _, $log, $timeout, $http, $cookieStore, constantJSON, 
			 navigationService, localStorageService, configurationService, constantService, authorizationService, loadService, accountService,
			 billCollectionService, messageService) {
    	
    	 $scope.title = "Bill Collection List Report";
   	 	 var promis, userInfo;
    	 $scope.selected = [];
		 $scope.itemsPerPage;
    	 $scope.currentPage = 1;
		 $scope.pageDataBegin = 0;
		 $scope.pageDataEnd = 0;
		 $scope.pageDataTotal = 0;
		 $scope.pageItemText = "";
		 $scope.maxPaginationSize = 5;
		 $scope.dataList = [];
		 $scope.displayedCollection = [];
		 $scope.itemsPerPage = 20;
		 
		 $scope.account ={};
		 $scope.status = [];
		 
		 $scope.backPagePerform = function (page) {
		    	navigationService.showPageWithTwoParam(page);
		 };
		 
		 
		 var doPagination = function(filteredResult){ 
        	 $scope.rowCollection = filteredResult;
			 $scope.pageDataTotal = filteredResult.length;
	        	if($scope.pageDataTotal === 0){
	        		$scope.pageDataBegin = 0;
	            	$scope.pageDataEnd = 0;        		    		
	    		} else {
	        		$scope.pageDataBegin = (($scope.currentPage - 1) * $scope.itemsPerPage) + 1;
	            	$scope.pageDataEnd = $scope.pageDataBegin + $scope.itemsPerPage - 1;    		
	    		}
	        	
	        	if($scope.pageDataTotal !== 0 && $scope.pageDataEnd > $scope.pageDataTotal) {
	        		$scope.pageDataEnd = $scope.pageDataTotal
	        	}  
	        	       	
	    		$scope.pageItemText = constantService.getPageItemText($scope.pageDataBegin, $scope.pageDataEnd, 
								$scope.pageDataTotal, "Account List", 'English');
	        };
	        
	        var createWatches = function (data) {
	        	$scope.$watch("searchText", function (filterText) {
	            	$scope.currentPage = 1;
	            });
	            
	            $scope.$watch('currentPage + itemsPerPage', function() {
	            	var begin = (($scope.currentPage - 1) * $scope.itemsPerPage), end = begin + ($scope.itemsPerPage - 0);
	            	$scope.rowCollection = data.slice(begin, end);
	            	$scope.pageDataTotal = $scope.dataListSize;
	            	
	            	if($scope.pageDataTotal === 0) {
	            		$scope.pageDataBegin = 0;
	                	$scope.pageDataEnd = 0;        		    		
	        		} else {
	            		$scope.pageDataBegin = begin + 1;
	                	$scope.pageDataEnd = end;
	        		}
	            	if($scope.pageDataTotal !== 0 && $scope.pageDataEnd > $scope.pageDataTotal) {
	            		$scope.pageDataEnd = $scope.pageDataTotal
	            	}
	        		$scope.pageItemText = constantService.getPageItemText($scope.pageDataBegin, $scope.pageDataEnd, 
							$scope.pageDataTotal, "Account List", "English");
	            });
	        };
	        
	        $scope.searchByAccountStatus = function(filterText){ 
				var filteredResult = $filter("dateFilter")($scope.dataList, filterText); 
	            $scope.dataListSize = filteredResult.length; 
	            doPagination(filteredResult); 
	            createWatches(filteredResult);
		     };
		     
		     $scope.filterByDate = function(filterText){ 
					var filteredResult = $filter("dateFilter")($scope.dataList, filterText); 
		            $scope.dataListSize = filteredResult.length; 
		            doPagination(filteredResult); 
		            createWatches(filteredResult);
			     };
	        
	        var getbillCollectionList = function () {
				//loadService.showDialog();
				promis = billCollectionService.getbillCollectionList();
				promis.then(function (data) {
					//loadService.hideDialog();
					if (!data == null) {
						messageService.showMessage(constantService.Danger, "errorData");
		                return;
					}
					$scope.dataList = data;
					console.log(data)
					$scope.rowCollection = $scope.dataList;
					$scope.dataListSize = $scope.rowCollection.length;
					createWatches($scope.dataList);
				});
				getStatus();
			};
			
			var getStatus = function(){
				$scope.status = constantJSON.accountStatusList;
				$scope.status = _.sortBy($scope.status, 'sortOrder');
				$scope.account.accountStatus = $scope.allStatus;
			};
	
		 var init = function () {			
			 getbillCollectionList();	
		 };
		 
		 init();
        
    };
    
    
    app.register.controller('billCollectionController', ['$rootScope', '$filter', '$scope', '_','$log', '$timeout', '$http', '$cookieStore', 
                                                 'constantJSON', 'navigationService', 'localStorageService', 'configurationService','constantService', 
                                                 'authorizationService', 'loadService', 'accountService', 'billCollectionService' , 'messageService', billCollectionController]);

});


