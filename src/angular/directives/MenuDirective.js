'use strict';

var MenuDirective = function ($window, $sce) {
	return {
		restrict: 'AE',
		link: function(scope, elem, attrs) {

			/*
			  Event Handler
			*/
			var _handleEvent = function (e, data) {
				var eventType = e.type ? e.type : e.name;
				switch(eventType) {
					case 'click':
						if (angular.element(e.target).hasClass('menu-button')) {
							_handleMenuState(angular.element(e.target));
						}

						break;
					case 'debouncedresize':
						break;
				}
			};


			

			/*
			  Methods
			*/
			var _handleMenuState = function ($el) {
				elem.toggleClass('expand');
				scope.$emit('ng_menuExpanded');
			};

		  /*
		  	Event Listeners
		  */
			elem.on('click', _handleEvent);
		}
  };
};
module.exports = MenuDirective;