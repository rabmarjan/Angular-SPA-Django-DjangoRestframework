
'use strict';

define(['app', 'services/utils/constantService'], function (app) {

    var messageService = function ($rootScope, constantService) {
    	
    	var showMessage;
    	
        this.showMessage = function (msgType, msgText) {
            var message = {};
            message.type = msgType;
            message.msg = msgText;
            $rootScope.$broadcast(constantService.AlertMessage, message);
        };
        
    };
    
    app.service('messageService', ['$rootScope', 'constantService', messageService]);

});

