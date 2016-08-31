
'use strict';

define(['app', 'services/utils/configurationService'], function (app) {

    var accountService = function ($resource, $q, configurationService, messageService, constantService) {
    	
    	var dataResource, delay;
        
        dataResource = $resource(configurationService.dataUrl, {}, {
        	getAccountList: { method: 'GET', isArray: true}
        });
        
     
        this.getAccountList = function () {
            delay = $q.defer();
            dataResource.getAccountList(function (data) {
                delay.resolve(data);
            }, function () {
                delay.reject('Unable to fetch..');
            });
            return delay.promise;
        };
        
    };
    
    app.service('accountService', ['$resource', '$q', 'configurationService', 'messageService', 
    'constantService', accountService]);

});







