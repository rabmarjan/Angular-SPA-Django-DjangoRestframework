
'use strict';

define(['services/utils/routeResolver'], function () {

	var app = angular.module('cellosticsApp', ['localization', 'ngRoute', 'ngAnimate', 'ngResource', 
              'ngCookies', 'ui.bootstrap', 'ui', 'ui.select2', 'highcharts-ng', 'ngTable', 
              'routeResolverServices', 'underscore',  
              'ui.bootstrap.transition', 'ngProgress', 'angularFileUpload', 'smart-table' ]);

	app.run(['$rootScope', '$route', '$http', '$location', '$cookieStore', 'constantService', 'localize', 'localStorageService',
	         function ($rootScope, $route, $http, $location, $cookieStore, constantService, localize, localStorageService) {
		
		var userInfo;
		$rootScope.messagePageLocation = 'app/partials/message.html';
		localize.setLanguage('en-US');
		
		$rootScope.$on("$routeChangeStart", function (oldPath, newPath) {
			$rootScope.pageTitle = newPath.$$route.title;
			if (newPath == undefined || newPath.$$route == undefined || newPath.$$route.isWeb) {
	        	$rootScope.layout = constantService.getWebLayout();
	            return;
	        } 
	       /* userInfo = localStorageService.getValue(constantService.userInfoCookieStoreKey);
	        if(userInfo === undefined || userInfo === null){
	            $rootScope.layout = constantService.getWebLayout();
	            $location.path('/');
	            return;
	        }*/
	        
	        $rootScope.layout = constantService.getAppLayout();
	        
	    });
    
	}]); 

	app.config(['$routeProvider','routeResolverProvider','$controllerProvider', '$compileProvider', 
	            '$filterProvider', '$provide', '$locationProvider', '$httpProvider',  
	         function ($routeProvider,routeResolverProvider, $controllerProvider, $compileProvider, 
	        	$filterProvider, $provide, $locationProvider, $httpProvider) {
		
		
		// Below lines for "application/x-www-form-urlencoded"
		/*$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
		$httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
			var key, result = [];
			if (typeof data === "string")
		    	return data;

		    for (key in data) {
		    	if (data.hasOwnProperty(key))
		    		result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
		    }
		    return result.join("&");
		  });*/
		  	  
		
    
		app.register =
	    {
	        controller: $controllerProvider.register,
	        //directive: $compileProvider.directive,
	        filter: $filterProvider.register,
	        //factory: $provide.factory,
	        //service: $provide.service
	    };
		
		// Provider-based service.
        app.service = function( name, constructor ) {
            $provide.service( name, constructor );
            return( this );
        };
        
        // Provider-based factory.
        app.factory = function( name, factory ) {
            $provide.factory( name, factory );
            return( this );
        };
        
        // Provider-based directive.
        app.directive = function( name, factory ) {
            $compileProvider.directive( name, factory );
            return( this );
        };
        
		var route = routeResolverProvider.route;
		$routeProvider
		//page and controller name prefix, dir path, title, isWeb
		// Web
		.when('/', 											route.resolve('signin', 						'security/',		'Sign in', 							true))
		
		// App
		.when('/dashboard', 								route.resolve('dashboard', 						'app/',				'Dashboard', 						false))
		.when('/Agent_Outlet_Wise_Mis_Report', 				route.resolve('accountlistreport', 				'app/',				'AccountListReport', 				false))
		.when('/Outlet_Wise_DA_Position_Report', 			route.resolve('billCollection', 				'app/',				'BillCollectionListReport', 				false))
			
		
		
	}]);
	

	return app;
	

});



    

    
    
    