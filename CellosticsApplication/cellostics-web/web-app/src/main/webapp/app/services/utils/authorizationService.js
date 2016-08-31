
'use strict';

define(['app', 'services/utils/configurationService', 'services/utils/navigationService',
        'services/utils/languageService', 'services/utils/localStorageService'], function (app) {

    var authorizationService = function ($location, $rootScope, $route, $window, $http, $cookieStore,
    		configurationService, navigationService, languageService, localStorageService) {
    	
    	this.setLoginInfo = function (data) {
            $rootScope.loginInfo = data;
        };

        this.getLoginInfo = function () {
            return $rootScope.loginInfo;
        };

        $rootScope.isLoggedIn = function () {
            return ($rootScope.loginInfo != null);
        };
            
       this.signOut = function () {
    	    delete $rootScope.user;
    		delete $http.defaults.headers.common['X-Auth-Token'];
            localStorageService.setValue(configurationService.userInfoCookieStoreKey, null);
            localStorageService.setValue(configurationService.menuInfoCookieStoreKey, null);
            $location.path('/');
        };
        
        this.authorizeLeftMenu = function (leftMenuId) {
        	var menuJson = localStorageService.getData(configurationService.loginMetaData).data.roleBean.menuJSON;
            for (var topMenuIndex = 0; topMenuIndex < menuJson.length; topMenuIndex++) {
                var leftMenuList = menuJson[topMenuIndex].leftmenuids;
                for (var leftMenuIndex = 0; leftMenuIndex < leftMenuList.length; leftMenuIndex++) {
                    if (leftMenuId == leftMenuList[leftMenuIndex]) {
                        return true;
                    }
                }
            }
            return false;
        };
        
        this.signIn = function (data) {
        	this.setLoginInfo(data);
        }
        
        this.setAccessPageInfo = function (data) {
            $rootScope.accessPageInfo = data;
        };

        this.getAccessPageInfo = function () {
            return $rootScope.accessPageInfo;
        };
    	
    };
    
    app.service('authorizationService', ['$location', '$rootScope', '$route', '$window', '$http', '$cookieStore', 
          'configurationService', 'navigationService', 'languageService', 'localStorageService', authorizationService]);

});
