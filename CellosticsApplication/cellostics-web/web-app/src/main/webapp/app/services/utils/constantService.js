
'use strict';

define(['app'], function (app) {

    var constantService = function ($rootScope, $cookieStore) {
    	
        this.getAppLayout = function () {
            var layout = {
                header: { location: 'app/views/layout/app/Header.html', isVisible: true },
                leftPanel: { location: 'app/views/layout/app/LeftPanel.html', isVisible: true},
                footer: { location: 'app/views/layout/web/Footer.html', isVisible: true }
            };
            return layout;
        };

        this.getWebLayout = function () {
            var layout = {
                header: { location: 'app/views/layout/web/Header.html', isVisible: true },
                leftPanel: { location: 'app/views/layout/web/LeftPanel.html', isVisible: true },
                rightPanel: { location: 'app/views/layout/web/RightPanel.html', isVisible: true },
                footer: { location: 'app/views/layout/web/Footer.html', isVisible: true }
            };
            return layout;
        };
        
        this.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        
        this.userInfoCookieStoreKey = 'user.info.cookie.store.key';
        this.menuInfoCookieStoreKey = 'menu.info.cookie.store.key';
        this.AlertMessage = 'AlertMessage';

        
        this.login = 'Login';
        this.logout = 'Logout';
        
        this.Active = 'A';
        this.Inactive = 'I';
        this.Others = 'Others';
        
        
        this.GetAll = 'GetAll';
        this.ChangeStatus = 'ChangeStatus';
        this.GetDataByOid = 'GetDataByOid';
        this.GetDataByCode = 'GetDataByCode';

        this.Danger = 'danger';
        this.Success = 'success';
        this.Info = 'info';
        this.Warning = 'warning';
        
        this.Save = 'Save';
        this.Update = 'Update';
        this.Delete = 'Delete';
        this.ChangePassword = 'ChangePassword';
        
        this.SaveReport = 'SaveReport';
        this.UpdateReport = 'UpdateReport';
        this.DeleteReport = 'DeleteReport';
        this.GetReportDataByOid = 'GetReportDataByOid';
        

        
        this.getPageItemText = function(pageDataBegin, pageDataEnd, pageDataTotal, recordTypeText, language) {
        	var pageItemText = "Showing "+pageDataBegin+
			" to "+pageDataEnd+
			" of "+pageDataTotal+
			" total "+recordTypeText+".";
			
			return pageItemText;       	
        };
        
        this.toggleBox = function(btnId){
    		var box = $('#'+btnId).parents(".box").first();
		    var bf = box.find(".box-body, .box-footer");
		    if (!box.hasClass("collapsed-box")) {
		        box.addClass("collapsed-box");
		        bf.slideUp();
		    } else {
		        box.removeClass("collapsed-box");
		        bf.slideDown();
		    }
    	};

        
        
    };
    
    app.service('constantService', ['$rootScope', '$cookieStore',  constantService]);

});
