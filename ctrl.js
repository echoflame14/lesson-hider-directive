angular.module("app").controller("ctrl",function($scope,srvc){
	$scope.arr = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
	$scope.test = "twoWayDataBinding";
});
