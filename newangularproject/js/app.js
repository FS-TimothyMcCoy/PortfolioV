var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "index.html"

	})
	.when("/pageOne", {
		templateUrl: "firstPage.html"

	})
	.when("/pageTwo", {
		templateUrl: "secondPage.html"

	})
	.when("/pageThree", {
		templateUrl: "thirdPage.html"

	})

});



