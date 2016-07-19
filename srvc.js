angular.module("app").service("srvc", function($http){
	this.talkToJson = function(){
		console.log("talking to json");
		return $http.get('schedule.json');
	};
});
