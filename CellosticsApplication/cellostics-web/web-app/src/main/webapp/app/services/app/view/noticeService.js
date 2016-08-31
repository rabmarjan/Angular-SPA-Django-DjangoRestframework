
'use strict';

define(['app'], function (app) {

	var noticeService = function ($rootScope, $resource, $q, $cookieStore, constantService, configurationService,
		messageService) {
		
		var noticeResource, delay, postObject;
	    
		noticeResource = $resource(configurationService.notice, {}, {
			postObject: { method: 'POST' }
		});
	    
		
		this.postObject = function (obj) {
            delay = $q.defer();
            noticeResource.postObject(obj, function (data) {
                delay.resolve(data);
            }, function () {
                delay.reject('Unable to fetch..');
            });
            return delay.promise;
        };
        
		this.validateForm = function(obj) {
			if(obj.shortDescription == undefined || obj.shortDescription.trim().length == 0){
				messageService.showMessage(constantService.Danger, 'Vd1016');
				$('#shortDescription').focus();
				return false;
			}
			if(obj.noticeType == undefined || obj.noticeType.trim().length == 0){
				messageService.showMessage(constantService.Danger, 'Vd1017');
				return false;
			}
			
			return true;
		};
		
	
    };
    
    app.service('noticeService', ['$rootScope', '$resource', '$q', '$cookieStore', 'constantService', 
           'configurationService', 'messageService', noticeService]);

});

