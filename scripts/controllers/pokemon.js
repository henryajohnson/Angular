pokemonApp.controller('PokemonCtrl', ['$scope', function($scope) {
  $scope.pokemons = [
  	{name: "Charmander", type: "Fire", status: "OK"},
  	{name: "Bulbasaur", type: "Grass", status: "OK"},
  	{name: "Squirtle", type: "Water", status: "OK"},
  	{name: "Pikachu", type: "Electric", status: "OK"}];
}]);
