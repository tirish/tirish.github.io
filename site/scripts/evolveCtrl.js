(function(){

    angular.module('tirish.github.io.app')
        .controller('evolveCtrl', ['_','$scope','pokeData','localStorageService',
            function(_, $scope, pokeData, localStorageService) {

                $scope.data = [];
                $scope.pokeOptions = pokeData.pokemon;

                $scope.storageSupported = localStorageService.isSupported;

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
                        pokemon: null
                    });
                }
                if(!$scope.data.length){
                    addEntry();
                }

                function removeEntry(idx){
                    _.pullAt($scope.data,idx);
                }

                function results(entry) {
                    var data = {
                        evolves: 0,
                        used: 0,
                        remaining: 0
                    };

                    if(!entry || !entry.pokemon){
                        return data;
                    }

                    var cost = entry.pokemon.cost || 0;
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
                    return data;
                }

                $scope.results = results;
                $scope.addEntry = addEntry;
                $scope.removeEntry = removeEntry;
                $scope.save = save;
                $scope.reset = reset;

            }
        ]).factory('pokeData',[
            function(){
                var pokemon = [
                    {
                        "name": "Bulbasaur",
                        "num": 1,
                        "imgUrl": "/site/img/pokemon/001.png",
                        "cost": 25
                    },
                    {
                        "name": "Ivysaur",
                        "num": 2,
                        "imgUrl": "/site/img/pokemon/002.png",
                        "cost": 100
                    },
                    {
                        "name": "Charmander",
                        "num": 4,
                        "imgUrl": "/site/img/pokemon/004.png",
                        "cost": 25
                    },
                    {
                        "name": "Charmeleon",
                        "num": 5,
                        "imgUrl": "/site/img/pokemon/005.png",
                        "cost": 100
                    },
                    {
                        "name": "Squirtle",
                        "num": 7,
                        "imgUrl": "/site/img/pokemon/007.png",
                        "cost": 25
                    },
                    {
                        "name": "Wartortle",
                        "num": 8,
                        "imgUrl": "/site/img/pokemon/008.png",
                        "cost": 100
                    },
                    {
                        "name": "Caterpie",
                        "num": 10,
                        "imgUrl": "/site/img/pokemon/010.png",
                        "cost": 12
                    },
                    {
                        "name": "Metapod",
                        "num": 11,
                        "imgUrl": "/site/img/pokemon/011.png",
                        "cost": 50
                    },
                    {
                        "name": "Weedle",
                        "num": 13,
                        "imgUrl": "/site/img/pokemon/013.png",
                        "cost": 12
                    },
                    {
                        "name": "Kakuna",
                        "num": 14,
                        "imgUrl": "/site/img/pokemon/014.png",
                        "cost": 50
                    },
                    {
                        "name": "Pidgey",
                        "num": 16,
                        "imgUrl": "/site/img/pokemon/016.png",
                        "cost": 12
                    },
                    {
                        "name": "Pidgeotto",
                        "num": 17,
                        "imgUrl": "/site/img/pokemon/017.png",
                        "cost": 50
                    },
                    {
                        "name": "Rattata",
                        "num": 19,
                        "imgUrl": "/site/img/pokemon/019.png",
                        "cost": 25
                    },
                    {
                        "name": "Spearow",
                        "num": 21,
                        "imgUrl": "/site/img/pokemon/021.png",
                        "cost": 50
                    },
                    {
                        "name": "Ekans",
                        "num": 23,
                        "imgUrl": "/site/img/pokemon/023.png",
                        "cost": 50
                    },
                    {
                        "name": "Pikachu",
                        "num": 25,
                        "imgUrl": "/site/img/pokemon/025.png",
                        "cost": 50
                    },
                    {
                        "name": "Sandshrew",
                        "num": 27,
                        "imgUrl": "/site/img/pokemon/027.png",
                        "cost": 50
                    },
                    {
                        "name": "Nidoran (f)",
                        "num": 29,
                        "imgUrl": "/site/img/pokemon/029.png",
                        "cost": 25
                    },
                    {
                        "name": "Nidorina",
                        "num": 30,
                        "imgUrl": "/site/img/pokemon/030.png",
                        "cost": 100
                    },
                    {
                        "name": "Nidoran (m)",
                        "num": 32,
                        "imgUrl": "/site/img/pokemon/032.png",
                        "cost": 25
                    },
                    {
                        "name": "Nidorino",
                        "num": 33,
                        "imgUrl": "/site/img/pokemon/033.png",
                        "cost": 100
                    },
                    {
                        "name": "Clefairy",
                        "num": 35,
                        "imgUrl": "/site/img/pokemon/035.png",
                        "cost": 50
                    },
                    {
                        "name": "Vulpix",
                        "num": 37,
                        "imgUrl": "/site/img/pokemon/037.png",
                        "cost": 50
                    },
                    {
                        "name": "Jigglypuff",
                        "num": 39,
                        "imgUrl": "/site/img/pokemon/039.png",
                        "cost": 50
                    },
                    {
                        "name": "Zubat",
                        "num": 41,
                        "imgUrl": "/site/img/pokemon/041.png",
                        "cost": 50
                    },
                    {
                        "name": "Oddish",
                        "num": 43,
                        "imgUrl": "/site/img/pokemon/043.png",
                        "cost": 25
                    },
                    {
                        "name": "Gloom",
                        "num": 44,
                        "imgUrl": "/site/img/pokemon/044.png",
                        "cost": 50
                    },
                    {
                        "name": "Paras",
                        "num": 46,
                        "imgUrl": "/site/img/pokemon/046.png",
                        "cost": 50
                    },
                    {
                        "name": "Venonat",
                        "num": 48,
                        "imgUrl": "/site/img/pokemon/048.png",
                        "cost": 50
                    },
                    {
                        "name": "Diglett",
                        "num": 50,
                        "imgUrl": "/site/img/pokemon/050.png",
                        "cost": 50
                    },
                    {
                        "name": "Meowth",
                        "num": 52,
                        "imgUrl": "/site/img/pokemon/052.png",
                        "cost": 50
                    },
                    {
                        "name": "Psyduck",
                        "num": 54,
                        "imgUrl": "/site/img/pokemon/054.png",
                        "cost": 50
                    },
                    {
                        "name": "Mankey",
                        "num": 56,
                        "imgUrl": "/site/img/pokemon/056.png",
                        "cost": 50
                    },
                    {
                        "name": "Growlithe",
                        "num": 58,
                        "imgUrl": "/site/img/pokemon/058.png",
                        "cost": 50
                    },
                    {
                        "name": "Poliwag",
                        "num": 60,
                        "imgUrl": "/site/img/pokemon/060.png",
                        "cost": 25
                    },
                    {
                        "name": "Poliwhirl",
                        "num": 61,
                        "imgUrl": "/site/img/pokemon/061.png",
                        "cost": 100
                    },
                    {
                        "name": "Abra",
                        "num": 63,
                        "imgUrl": "/site/img/pokemon/063.png",
                        "cost": 25
                    },
                    {
                        "name": "Kadabra",
                        "num": 64,
                        "imgUrl": "/site/img/pokemon/064.png",
                        "cost": 100
                    },
                    {
                        "name": "Machop",
                        "num": 66,
                        "imgUrl": "/site/img/pokemon/066.png",
                        "cost": 25
                    },
                    {
                        "name": "Machoke",
                        "num": 67,
                        "imgUrl": "/site/img/pokemon/067.png",
                        "cost": 100
                    },
                    {
                        "name": "Bellsprout",
                        "num": 69,
                        "imgUrl": "/site/img/pokemon/069.png",
                        "cost": 25
                    },
                    {
                        "name": "Weepinbell",
                        "num": 70,
                        "imgUrl": "/site/img/pokemon/070.png",
                        "cost": 100
                    },
                    {
                        "name": "Tentacool",
                        "num": 72,
                        "imgUrl": "/site/img/pokemon/072.png",
                        "cost": 50
                    },
                    {
                        "name": "Geodude",
                        "num": 74,
                        "imgUrl": "/site/img/pokemon/074.png",
                        "cost": 25
                    },
                    {
                        "name": "Graveler",
                        "num": 75,
                        "imgUrl": "/site/img/pokemon/075.png",
                        "cost": 100
                    },
                    {
                        "name": "Ponyta",
                        "num": 77,
                        "imgUrl": "/site/img/pokemon/077.png",
                        "cost": 50
                    },
                    {
                        "name": "Slowpoke",
                        "num": 79,
                        "imgUrl": "/site/img/pokemon/079.png",
                        "cost": 50
                    },
                    {
                        "name": "Magnemite",
                        "num": 81,
                        "imgUrl": "/site/img/pokemon/081.png",
                        "cost": 50
                    },
                    {
                        "name": "Doduo",
                        "num": 84,
                        "imgUrl": "/site/img/pokemon/084.png",
                        "cost": 50
                    },
                    {
                        "name": "Seel",
                        "num": 86,
                        "imgUrl": "/site/img/pokemon/086.png",
                        "cost": 50
                    },
                    {
                        "name": "Grimer",
                        "num": 88,
                        "imgUrl": "/site/img/pokemon/088.png",
                        "cost": 50
                    },
                    {
                        "name": "Shellder",
                        "num": 90,
                        "imgUrl": "/site/img/pokemon/090.png",
                        "cost": 50
                    },
                    {
                        "name": "Gastly",
                        "num": 92,
                        "imgUrl": "/site/img/pokemon/092.png",
                        "cost": 25
                    },
                    {
                        "name": "Haunter",
                        "num": 93,
                        "imgUrl": "/site/img/pokemon/093.png",
                        "cost": 100
                    },
                    {
                        "name": "Drowzee",
                        "num": 96,
                        "imgUrl": "/site/img/pokemon/096.png",
                        "cost": 50
                    },
                    {
                        "name": "Krabby",
                        "num": 98,
                        "imgUrl": "/site/img/pokemon/098.png",
                        "cost": 50
                    },
                    {
                        "name": "Voltorb",
                        "num": 100,
                        "imgUrl": "/site/img/pokemon/100.png",
                        "cost": 50
                    },
                    {
                        "name": "Exeggcute",
                        "num": 102,
                        "imgUrl": "/site/img/pokemon/102.png",
                        "cost": 50
                    },
                    {
                        "name": "Cubone",
                        "num": 104,
                        "imgUrl": "/site/img/pokemon/104.png",
                        "cost": 50
                    },
                    {
                        "name": "Koffing",
                        "num": 109,
                        "imgUrl": "/site/img/pokemon/109.png",
                        "cost": 50
                    },
                    {
                        "name": "Rhyhorn",
                        "num": 111,
                        "imgUrl": "/site/img/pokemon/111.png",
                        "cost": 50
                    },
                    {
                        "name": "Horsea",
                        "num": 116,
                        "imgUrl": "/site/img/pokemon/116.png",
                        "cost": 50
                    },
                    {
                        "name": "Goldeen",
                        "num": 118,
                        "imgUrl": "/site/img/pokemon/118.png",
                        "cost": 50
                    },
                    {
                        "name": "Staryu",
                        "num": 120,
                        "imgUrl": "/site/img/pokemon/120.png",
                        "cost": 50
                    },
                    {
                        "name": "Magikarp",
                        "num": 129,
                        "imgUrl": "/site/img/pokemon/129.png",
                        "cost": 400
                    },
                    {
                        "name": "Eevee",
                        "num": 133,
                        "imgUrl": "/site/img/pokemon/133.png",
                        "cost": 25
                    },
                    {
                        "name": "Omanyte",
                        "num": 138,
                        "imgUrl": "/site/img/pokemon/138.png",
                        "cost": 50
                    },
                    {
                        "name": "Kabuto",
                        "num": 140,
                        "imgUrl": "/site/img/pokemon/140.png",
                        "cost": 50
                    },
                    {
                        "name": "Dratini",
                        "num": 147,
                        "imgUrl": "/site/img/pokemon/147.png",
                        "cost": 25
                    },
                    {
                        "name": "Dragonair",
                        "num": 148,
                        "imgUrl": "/site/img/pokemon/148.png",
                        "cost": 100
                    }
                ];

                return {
                    pokemon: pokemon
                };

            }]);


})();