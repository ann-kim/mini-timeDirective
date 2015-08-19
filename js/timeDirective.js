var app = angular.module('timeApp');

app.directive('showTime', function() {
	return {
		restrict: 'E',
		template: '<div>The current time is {{time}}</div>',
		// template: '<div>The current time is {{time}} {{matchmaker}} {{personName}}' + '<button id="btn">Meet</button>' + '</div>',
		link: function(scope, element, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();

			//This element is making the button do something when we click it (I didn't write the function out but it would be in the controller)
			// element.on('click', function($scope.personName) {

			// });
		},
		scope: { //isolate scope (isolated from parents so can do own thing)
			//'=name' (the =) is two-way binding (like doing ng-model); find thing with same name as what is after = on the html and then matches/links them
				// matchmaker: '=name'
			//'@' is taking the value of what is in the html and making an exact copy
			matchmaker: '@' //string-literal; this looks in html for property w/same name; try and take that value and put in on our scope for us
			personName: '=name' //two-way binding back to a controller
			meetFn: '&meet' //expression (didn't write this function out)
		}
	}
});