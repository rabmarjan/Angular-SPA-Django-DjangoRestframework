
'use strict';

define(['app'], function (app) {

    var sliceFilter = function () {
    	
    	return function(arr, start, end) {
    		return (arr || []).slice(start, end);
    	};
    	/*
        return function (slices, filterValue) {
            if (!filterValue) return slices;
            var matches = [];
            filterValue = filterValue.toLowerCase();
            for (var i = 0; i < slices.length; i++) {
                var slice = slices[i];
                if ((slice.shortDescription != undefined && slice.shortDescription.toLowerCase().indexOf(filterValue) > -1) ) {
                    matches.push(slice);
                }
            }
            return matches;
        };
        */
    };

    app.filter('sliceFilter', sliceFilter);

});