function config($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home/index");
	$stateProvider
		.state('home',{
			url : '/home',
			templateUrl : 'views/main.html',
			controller : "main"
		})
		.state('home.index',{
			url : '/index',
			templateUrl : 'views/index.html',
			controller : "index"
		})
		.state('home.sex',{
			url : '/sex',
			templateUrl : 'views/sex.html',
			controller : "sex"
		})
		.state('home.sick',{
			url : '/sick',
			templateUrl : 'views/sick.html',
			controller : "sick"
		})
		.state('home.allergy',{
			url : '/allergy',
			templateUrl : 'views/allergy.html',
			controller : "allergy"
		})
		.state('home.food',{
			url : '/food',
			templateUrl : 'views/food.html',
			controller : "food"
		})
		.state('home.item',{
			url : '/item',
			templateUrl : 'views/item.html',
			controller : "item"
		})
}

angular.module('app')
	   .config(config)