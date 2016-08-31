
'use strict';

define(['app', 'services/utils/configurationService'], function (app) {

    var billCollectionService = function ($resource, $q, configurationService, messageService, constantService) {
    	
    	var billCollectionResource, delay;
        
        billCollectionResource = $resource(configurationService.billCollectionUrl, {}, {
        	getbillCollectionList: { method: 'GET', isArray: true}
        });
        
     
        this.getbillCollectionList = function () {
            delay = $q.defer();
            billCollectionResource.getbillCollectionList(function (data) {
                delay.resolve(data);
            }, function () {
                delay.reject('Unable to fetch..');
            });
            return delay.promise;
        };
        
    };
    
    app.service('billCollectionService', ['$resource', '$q', 'configurationService', 'messageService', 
    'constantService', billCollectionService]);

});







