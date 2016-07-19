angular.module("app").directive("dir", function(){
	return{
		templateUrl: "lessonHider.html",
		restrict: 'E',
		scope:{
			lesson: '='
		},
		controller: function($scope,srvc){
			$scope.talkToJson = srvc.talkToJson();
		},
		link: function(scope,element,attr){
			scope.talkToJson.then(function(response){
				console.log(response);
			scope.schedule = response.data;
			for (var i = 0; i <	response.data.length; i++) {
				console.log(i);
				for (var x = 0; x < scope.lesson.length; x++) {
					if(scope.lesson[x] === response.data[i].lesson){
						console.log("taking out this one " + scope.lesson[x]);
						element.css('text-decoration', 'line-through');
					}
				}
			}
			});
		}
	};
});
