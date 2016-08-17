(function(){

    angular.module('tirish.github.io.app')
        .controller('pokedexCtrl',[ '$scope', 'pokeData', '_',
            function($scope, pokeData, _){

                $scope.data = _.map(pokeData.pokemon, function(poke){

                    return _.extend(poke, {
                        name: poke.n,
                        captured: false,
                        seen: false
                    });

                });

                $scope.toggle = function(poke){
                    if(poke.captured){
                        poke.captured = false;
                        poke.seen = true;
                    } else if(poke.seen){
                        poke.captured = false;
                        poke.seen = false;
                    } else {
                        poke.captured = true;
                        poke.seen = false;
                    }
                };



            }]);

})();