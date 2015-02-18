'use strict';

var HeaderDirective = function ($window, $sce) {
	return {
		restrict: 'AE',
		link: function(scope, elem, attrs) {

			/*
			  Event Handler
			*/
			var _handleEvent = function (e, data) {
				var eventType = e.type ? e.type : e.name;
				var className;
				switch(eventType) {
					case 'mouseover':
						className = e.target && e.target.getAttribute('data-target') ? e.target.getAttribute('data-target') : '';
						elem.addClass(className);
						break;
					case 'mouseout':
						className = e.target && e.target.getAttribute('data-target') ? e.target.getAttribute('data-target') : '';
						elem.removeClass(className);
						break;
				}
			};


			/*
		  		Event Listeners
			*/
			elem.find('.nav-link, .logo-link').on('mouseover', _handleEvent);
			elem.find('.nav-link, .logo-link').on('mouseout', _handleEvent);
		}
	};
};
module.exports = HeaderDirective;