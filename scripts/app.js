var pokemonApp = angular.module('pokemonApp', ['ngRoute']);
pokemonApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/pokemon', {
		templateUrl: 'views/pokemon.html',
		controller: 'PokemonCtrl'
		});
}]);
