(function(){

    angular.module('tirish.github.io.app')
        .controller('evolveCtrl', ['_','$scope','pokeData','localStorageService',
            function(_, $scope, pokeData, localStorageService) {

                $scope.data = [];
                $scope.pokeOptions = pokeData.evolvePokemon;
                var pokemonLookup = _.indexBy(pokeData.evolvePokemon,'num');

                $scope.storageSupported = localStorageService.isSupported;

                function load(){
                    //initialize stored data
                    if(localStorageService.isSupported){
                        var stored = localStorageService.get('evolveCalc');
                        if(stored){
                            try {
                                var data = JSON.parse(stored);
                                if(_.isArray(data)){
                                    $scope.data = data;
                                }
                            } catch (err){
                                console.error('Stored data is malformed');
                            }
                        }
                    }
                }
                load();
                
                function reset(){
                    $scope.data = [];
                    addEntry();
                }

                function save(){
                    if(localStorageService.isSupported){
                        localStorageService.set('evolveCalc',angular.toJson($scope.data));
                    }
                }

                function addEntry(){
                    $scope.data.push({
                        invest: true,
                        transfer: false,
                        available: null,
                        pokemonNumber: null
                    });
                }

                function insertEntry(entry, index){
                    $scope.data.splice(index, 0, entry);
                }


                if(!$scope.data.length){
                    addEntry();
                }

                function removeEntry(idx){
                    _.pullAt($scope.data,idx);
                }

                var resultsMemo = _.memoize(function results(entry) {
                    var data = {
                        evolves: 0,
                        used: 0,
                        remaining: 0,
                        needed: 0
                    };


                    if(!entry || !entry.pokemonNumber){
                        return data;
                    }

                    var pokemon = pokemonLookup[entry.pokemonNumber];
                    var cost = pokemon.cost || 0;
                    var available = entry.available || 0;
                    if (!entry.invest) {
                        data.evolves = Math.floor(available / cost);
                        data.used = data.evolves * cost;
                        data.remaining = available - data.used + data.evolves;
                        if(entry.transfer){
                            data.remaining += data.evolves;
                        }
                    } else {
                        do {
                            var wave = Math.floor(available / cost);
                            var waveCost = (wave * cost);
                            available -= waveCost;
                            available += wave; //rewards
                            data.used += waveCost;
                            data.evolves += wave;
                            if(entry.transfer){
                                available += wave;
                            }
                        } while (available >= cost);
                        data.remaining = available;
                    }

                    data.needed = cost - data.remaining;
                    return data;
                }, function(entry){
                    return entry.pokemonNumber + '-'+entry.available + '-' + entry.invest + '-' + entry.transfer;
                });

                function aggregateResults(){
                    return _.reduce($scope.data, function(total, entry){
                        return total + (resultsMemo(entry).evolves||0);
                    }, 0);
                }

                $scope.results = resultsMemo;
                $scope.addEntry = addEntry;
                $scope.insertEntry = insertEntry;
                $scope.removeEntry = removeEntry;
                $scope.save = save;
                $scope.reset = reset;
                $scope.aggregateResults = aggregateResults;
            }
        ]);


})();