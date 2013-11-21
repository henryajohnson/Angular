pokemonApp.controller('PokemonCtrl', ['$scope', function($scope) {
  $scope.pokemons = [
  	{name: "Charmander", type: "Fire", status: "OK"},
  	{name: "Bulbasaur", type: "Grass", status: "OK"},
  	{name: "Squirtle", type: "Water", status: "OK"},
  	{name: "Pickachu", type: "Electric", status: "OK"}];
}]);
