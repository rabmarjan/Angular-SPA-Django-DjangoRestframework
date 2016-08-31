
'use strict';

define(['app'], function (app) {
	
    var dateValidator = function () {
        return {
        	restrict: 'A',
        	require: 'ngModel',
        	link: function (scope, elem, attrs, ctrl) {
        		
        		//----------- Mandatory Field Validation Msg ----------//
        		angular.forEach(elem, function(element, key) {
        			if($("#"+element.id).attr("mandatory")) {
    					var spanTagForMandatoryField = document.createElement("span");
    					spanTagForMandatoryField.setAttribute( 'id' , "msgForMandatoryField-"+element.id );
    					spanTagForMandatoryField.setAttribute( 'hidden' , "hidden" ); 
    					spanTagForMandatoryField.textContent  = "Input mandatory data!!";    //InputFieldErrorMessage
    	                element.parentNode.insertBefore(spanTagForMandatoryField, element.nextSibling);
            			$("#msgForMandatoryField-"+element.id).css( 'color' , function() {
    						return "red";
    					});
    				}
        			else {
    					var spanTagForMandatoryField = document.createElement("span");
    					spanTagForMandatoryField.setAttribute( 'id' , "msgForMandatoryField-"+element.id );
    					spanTagForMandatoryField.setAttribute( 'hidden' , "hidden" );
    	                element.parentNode.insertBefore(spanTagForMandatoryField, element.nextSibling);
        			}
        		});
        		
        		scope.$watch(attrs.ngModel, function (newVal, oldVal) {
        			angular.forEach(elem, function(element, key) {
        				
        				var today = new Date();
        				var thisYear = today.getFullYear();
        				//TODO: attrs.maxYear and attrs.minYear should be dynamic
        				var yearRangeStart = 1971;
        				var yearRangeEnd = yearRangeStart + 100;
        				var customDateFormat = 'd-M-Y';
        				var dateRangeStart = '26'+'-'+'Mar'+'-'+yearRangeStart;
        				var dateRangeEnd = '31'+'-'+'Dec'+'-'+yearRangeEnd;
        				
        				if(element.value == undefined || element.value == null || element.value == "") {
        					$(element).next("span").next("span").remove();
        					var spanTag = document.createElement("span");
        	                spanTag.setAttribute( 'id' , "msg-"+element.id );
        	                spanTag.setAttribute( 'hidden' , "hidden" ); 
        	                spanTag.textContent  = "";//InputFieldErrorMessage
        	                element.parentNode.insertBefore(spanTag, element.nextSibling.nextSibling);
        	                $("#msg-"+element.id).show();
    						$("#msg-"+element.id).css( 'color' , function() {
    							return "blue";
    						});
        	                $("#"+element.id).addClass("datetimepicker read-only-datepicker");
        					$("#"+element.id).datetimepicker({
        						closeOnDateSelect : true,
        						scrollInput : false,
        						scrollMonth : false,
        						datepicker : true,
        						timepicker : false,
        						yearStart : yearRangeStart,
        						yearEnd : yearRangeEnd,
        						minDate : dateRangeStart,
        						maxDate : dateRangeEnd,
        						startDate : 0,
        						formatDate : customDateFormat,
        						format : customDateFormat
        					});
        				}
        				else {
        					$("#msgForMandatoryField-"+element.id).hide();
        					$("#msg-"+element.id).text("");
        					$("#msg-"+element.id).hide();
        	                $("#"+element.id).addClass("datetimepicker read-only-datepicker");
        					$("#"+element.id).datetimepicker({
        						closeOnDateSelect : true,
        						scrollInput : false,
        						scrollMonth : false,
        						datepicker : true,
        						timepicker : false,
        						yearStart : yearRangeStart,
        						yearEnd : yearRangeEnd,
        						minDate : dateRangeStart,
        						maxDate : dateRangeEnd,
        						startDate : element.value,
        						formatDate : customDateFormat,
        						format : customDateFormat
        					});
        				}
        			});
        		}, true);
        		
        		var getMonthOfToday = function() {
        			
        			var d = new Date();
        			var month = new Array();
        			month[0] = "Jan";
        			month[1] = "Feb";
        			month[2] = "Mar";
        			month[3] = "Apr";
        			month[4] = "May";
        			month[5] = "Jun";
        			month[6] = "Jul";
        			month[7] = "Aug";
        			month[8] = "Sep";
        			month[9] = "Oct";
        			month[10] = "Nov";
        			month[11] = "Dec";
        			var n = month[d.getMonth()];
        			
        			return n;        			
        		};
        		
        		var getDateOfTodayWithLeadingZero = function() {
        			
        			return ('0' + new Date().getDate()).slice(-2);
        		};
        		
        	}
        }
    };

    app.directive('dateValidator', [dateValidator]);
});



