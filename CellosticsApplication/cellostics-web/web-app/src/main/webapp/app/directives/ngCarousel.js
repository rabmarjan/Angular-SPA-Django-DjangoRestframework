
'use strict';

define(['app'], function (app) {

    var ngCarousel = function () {
    	return {
    	    restrict: 'EA',
    	    transclude: true,
    	    replace: true,
    	    controller: 'CarouselController',
    	    require: 'carousel',
    	    templateUrl: 'template/carousel/carousel.html',
    	    scope: {
    	      interval: '=',
    	      noTransition: '=',
    	      noPause: '='
    	    }
    	  };
    };

    app.directive('carousel', [ngCarousel]);

});