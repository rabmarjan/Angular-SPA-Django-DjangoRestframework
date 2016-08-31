
'use strict';

define(['app', 'services/utils/configurationService'], function (app) {

    var signInService = function ($resource, $http, $q, configurationService, messageService, constantService) {
    	
    	var signInResource, delay;
        
    	signInResource = $resource(configurationService.login, {}, {
    		postObject: { method: 'POST' }
        });
        
        this.postObject = function (obj) {
            delay = $q.defer();
            signInResource.postObject(obj, function (data) {
                delay.resolve(data);
            }, function () {
                delay.reject('Unable to fetch..');
            });
            return delay.promise;
        };
        
        /*
       http({
            method: 'POST',
            url: configurationService.login,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {username: $scope.username, password: $scope.password}
        }).success(function () {});
              */

    };
    
    app.service('signInService', ['$resource', '$http', '$q', 'configurationService', 'messageService', 
    'constantService', signInService]);

});







