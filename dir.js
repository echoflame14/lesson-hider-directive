angular.module("app").directive("dir", function(){
	return{
		templateUrl: "lessonHider.html",
		restrict: 'E',
		scope:{

		},
		link: function(scope,elements,attr){
			console.log(scope);
			console.log(elements);
			console.log(attr);
		}
	};
});
