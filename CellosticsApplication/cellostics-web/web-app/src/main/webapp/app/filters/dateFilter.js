'use strict';

define(['app'], function (app) {

    var dateFilter = function () {
        return function (dataList, filterValue) {
        	
            if (!filterValue) return dataList;

            var matches = [];
            filterValue = filterValue.toLowerCase();
            for (var i = 0; i < dataList.length; i++) {
                var accountdDataList = dataList[i];
                
                var myDate = new Date(accountdDataList.applicationdate);
                var locale = "en-us";
              
                var strDate = myDate.getDate()  +"-"+myDate.toLocaleString(locale, { month: "short" }) +"-" + myDate.getFullYear();
              
                if (accountdDataList.accountstatus.toLowerCase().indexOf(filterValue) > -1) {
                    matches.push(accountdDataList);
                } else if (strDate.toLowerCase().indexOf(filterValue) > -1) {
                    matches.push(accountdDataList);
                }
            }
            return matches;
        };
    };

    app.filter('dateFilter', dateFilter);

});


