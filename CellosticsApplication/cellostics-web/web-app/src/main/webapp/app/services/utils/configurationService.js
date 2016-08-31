
'use strict';

define(['app'], function (app) {

    var configurationService = function ($rootScope) {
    	
    	this.http = 'http://';
    	this.server = 'localhost';
        this.port = ':8000';
        this.appname = '/web-app';
        this.url = this.http + this.server + this.port
        this.rootUrl = this.http + this.server + this.port + this.appname;
        this.baseUrl = this.http + this.server + this.port + this.apprest;
		this.login = this.url + '/api/login/';
		this.accountReportUrl = this.url + '/accountReport';
		this.dataUrl = this.url + '/accounts';
		this.billCollectionUrl = this.url + '/billcollection';
    };
    
    app.service('configurationService', ['$rootScope', configurationService]);

});


