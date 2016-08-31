
'use strict';

define(['app'], function (app) {

    var myCalendar = function () {
    	return {
            require: 'ngModel',
            link: function (scope, el, attr, ngModel) {
                $(el).datepicker({
                	dateFormat: 'dd-mm-yy' 
                }).on("changeDate", function (ev) {
                	scope.$apply(function () {
                        //ngModel.$setViewValue(moment(ev.date));
                        var x = moment(ev.date).format('DD/MM/YYYY').toString();
                        ngModel.$setViewValue(x);
                    });
                    $(el).datepicker('hide');
                }).on("setDate", function (ev) {
                	console.log(ev);
                });
            }
        };
    };

    app.directive('myCalendar', [ myCalendar ]);

});