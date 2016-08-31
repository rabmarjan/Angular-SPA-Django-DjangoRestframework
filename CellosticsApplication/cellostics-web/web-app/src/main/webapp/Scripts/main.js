
require.config({
    baseUrl: 'app',
    urlArgs: 'v=1.0'
});

require(
    [
        'app',
        'directives/ngEnter',
        'directives/decimalMask',
        'directives/integerMask',
        'directives/highChart',
        'directives/dateRange',
        'directives/myCalendar',
        'directives/bootstrapDatepicker',
        'directives/dateValidator',
        'filters/sliceFilter', 
        'filters/dateFilter', 
        'services/utils/routeResolver',
        'services/utils/constantService',
        'services/utils/constantJSON',
        'services/utils/configurationService',
        'services/utils/localStorageService',
        'services/utils/navigationService',
        'services/utils/authorizationService',
        'services/utils/languageService',
        'services/utils/menuService',
        'services/utils/loadService',
        'services/utils/modalService',
        'services/utils/alertService',
        'services/utils/messageService',
        'services/app/security/signInService',
        'services/app/view/accountService',
        'services/app/view/billCollectionService',
        'controllers/util/appHeaderController',
        'controllers/util/webHeaderController',
        'controllers/util/webFooterController',
        'controllers/util/appLeftMenuController',
        'controllers/util/webLeftMenuController',
        'controllers/util/webRightPanelController',
        'controllers/util/messageController'
    ],
function () {
    angular.bootstrap(document, ['cellosticsApp']);
});

