
'use strict';

define(['app'], function (app) {

	var constantJSON = function ($rootScope) {			
	this.accountStatusList = [
		                          { statusID: 'All', 	statusName: 'All'},
		                          { statusID: 'AS', 	statusName: 'Submitted'},
		                          { statusID: 'BM', 	statusName: 'Entered/ Edited'},
		                          { statusID: 'BA', 	statusName: 'Approved'},
		                          { statusID: 'BR', 	statusName: 'Rejected'},
		                          { statusID: 'A', 		statusName: 'Active'},
		                          { statusID: 'I', 		statusName: 'Inactive'},
		                          { statusID: 'C', 		statusName: 'Canceled'}
	                          ];
	};
	app.service('constantJSON', ['$rootScope', constantJSON]);
});

