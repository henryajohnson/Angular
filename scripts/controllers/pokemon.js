pokemonApp.controller('PokemonCtrl', ['$scope', function($scope) {
  $scope.pokemons = [
  	{name: "Charmander", type: "Fire", status: "OK"},
  	{name: "Bulbasaur", type: "Grass", status: "OK"},
  	{name: "Squirtle", type: "Water", status: "OK"},
  	{name: "Pikachu", type: "Electric", status: "OK"}];
  
  $scope.$watch("pokemon.type", function(){
  	$scope.$broadcast("pokemonApp.event");
  }, true);

  $scope.$on("pokemonApp.event", function() {
  	console.log("An event has been fired!");
  });

  $scope.clickEvent = function ($scope) {
  	console.log("I'm clicking!");
  };

}]);
