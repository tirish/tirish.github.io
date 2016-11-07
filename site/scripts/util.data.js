(function(){

    angular.module('tirish.github.io.app')
        .factory('pokeData',['_',
            function(_){

                // n: Name
                // t: Types
                // e: evolve data
                //    f: Evolved from Pokemon Index
                //    t: Evoves into Pokemon Index
                //    c: Candy Cost

                // Pokemon # = index + 1

                var pokemon = [{
                    n: "Bulbasaur",
                    t: [0, 1],
                    e: [{
                        t: 1,
                        c: 25
                    }]
                }, {
                    n: "Ivysaur",
                    t: [0, 1],
                    e: [{
                        f: 0,
                        t: 2,
                        c: 100
                    }]
                }, {
                    n: "Venasaur",
                    t: [0, 1],
                    e: [{
                        f: 1
                    }]
                }, {
                    n: "Charmander",
                    t: [2],
                    e: [{
                        t: 4,
                        c: 25
                    }]
                }, {
                    n: "Charmeleon",
                    t: [2],
                    e: [{
                        f: 3,
                        t: 5,
                        c: 100
                    }]
                }, {
                    n: "Charizard",
                    t: [2, 3],
                    e: [{
                        f: 4
                    }]
                }, {
                    n: "Squirtle",
                    t: [4],
                    e: [{
                        t: 7,
                        c: 25
                    }]
                }, {
                    n: "Wartortle",
                    t: [4],
                    e: [{
                        f: 6,
                        t: 8,
                        c: 100
                    }]
                }, {
                    n: "Blastoise",
                    t: [4],
                    e: [{
                        f: 7
                    }]
                }, {
                    n: "Caterpie",
                    t: [5],
                    e: [{
                        t: 10,
                        c: 12
                    }]
                }, {
                    n: "Metapod",
                    t: [5],
                    e: [{
                        f: 9,
                        t: 11,
                        c: 50
                    }]
                }, {
                    n: "Butterfree",
                    t: [3, 5],
                    e: [{
                        f: 10
                    }]
                }, {
                    n: "Weedle",
                    t: [1, 5],
                    e: [{
                        t: 13,
                        c: 12
                    }]
                }, {
                    n: "Kakuna",
                    t: [1, 5],
                    e: [{
                        f: 12,
                        t: 14,
                        c: 50
                    }]
                }, {
                    n: "Beedrill",
                    t: [1, 5],
                    e: [{
                        f: 13
                    }]
                }, {
                    n: "Pidgey",
                    t: [6],
                    e: [{
                        t: 16,
                        c: 12
                    }]
                }, {
                    n: "Pidgeotto",
                    t: [3, 6],
                    e: [{
                        f: 15,
                        t: 17,
                        c: 50
                    }]
                }, {
                    n: "Pidgeot",
                    t: [3, 6],
                    e: [{
                        f: 16
                    }]
                }, {
                    n: "Rattata",
                    t: [6],
                    e: [{
                        t: 19,
                        c: 25
                    }]
                }, {
                    n: "Raticate",
                    t: [6],
                    e: [{
                        f: 18
                    }]
                }, {
                    n: "Spearow",
                    t: [3, 6],
                    e: [{
                        t: 21,
                        c: 50
                    }]
                }, {
                    n: "Fearow",
                    t: [3, 6],
                    e: [{
                        f: 20
                    }]
                }, {
                    n: "Ekans",
                    t: [1],
                    e: [{
                        t: 23,
                        c: 50
                    }]
                }, {
                    n: "Arbok",
                    t: [1],
                    e: [{
                        f: 22
                    }]
                }, {
                    n: "Pikachu",
                    t: [7],
                    e: [{
                        t: 25,
                        c: 50
                    }]
                }, {
                    n: "Raichu",
                    t: [7],
                    e: [{
                        f: 24
                    }]
                }, {
                    n: "Sandshrew",
                    t: [8],
                    e: [{
                        t: 27,
                        c: 50
                    }]
                }, {
                    n: "Sandslash",
                    t: [8],
                    e: [{
                        f: 26
                    }]
                }, {
                    n: "Nidoran (f)",
                    t: [1],
                    e: [{
                        t: 29,
                        c: 25
                    }]
                }, {
                    n: "Nidorina",
                    t: [1],
                    e: [{
                        f: 28,
                        t: 30,
                        c: 100
                    }]
                }, {
                    n: "Nidoqueen",
                    t: [1, 8],
                    e: [{
                        f: 29
                    }]
                }, {
                    n: "Nidoran (m)",
                    t: [1],
                    e: [{
                        t: 32,
                        c: 25
                    }]
                }, {
                    n: "Nidorino",
                    t: [1],
                    e: [{
                        f: 31,
                        t: 33,
                        c: 100
                    }]
                }, {
                    n: "Nidoking",
                    t: [1, 8],
                    e: [{
                        f: 32
                    }]
                }, {
                    n: "Clefairy",
                    t: [9],
                    e: [{
                        t: 35,
                        c: 50
                    }]
                }, {
                    n: "Clefable",
                    t: [9],
                    e: [{
                        f: 34
                    }]
                }, {
                    n: "Vulpix",
                    t: [2],
                    e: [{
                        t: 37,
                        c: 50
                    }]
                }, {
                    n: "Ninetales",
                    t: [2],
                    e: [{
                        f: 36
                    }]
                }, {
                    n: "Jigglypuff",
                    t: [6, 9],
                    e: [{
                        t: 39,
                        c: 50
                    }]
                }, {
                    n: "Wigglytuff",
                    t: [6, 9],
                    e: [{
                        f: 38
                    }]
                }, {
                    n: "Zubat",
                    t: [1, 3],
                    e: [{
                        t: 41,
                        c: 50
                    }]
                }, {
                    n: "Golbat",
                    t: [1, 3],
                    e: [{
                        f: 40
                    }]
                }, {
                    n: "Oddish",
                    t: [0, 1],
                    e: [{
                        t: 43,
                        c: 25
                    }]
                }, {
                    n: "Gloom",
                    t: [0, 1],
                    e: [{
                        f: 42,
                        t: 44,
                        c: 100
                    }]
                }, {
                    n: "Vileplume",
                    t: [0, 1],
                    e: [{
                        f: 43
                    }]
                }, {
                    n: "Paras",
                    t: [0, 5],
                    e: [{
                        t: 46,
                        c: 50
                    }]
                }, {
                    n: "Parasect",
                    t: [0, 5],
                    e: [{
                        f: 45
                    }]
                }, {
                    n: "Venonat",
                    t: [1, 5],
                    e: [{
                        t: 48,
                        c: 50
                    }]
                }, {
                    n: "Venomoth",
                    t: [1, 5],
                    e: [{
                        f: 47
                    }]
                }, {
                    n: "Diglett",
                    t: [8],
                    e: [{
                        t: 50,
                        c: 50
                    }]
                }, {
                    n: "Dugtrio",
                    t: [8],
                    e: [{
                        f: 49
                    }]
                }, {
                    n: "Meowth",
                    t: [6],
                    e: [{
                        t: 52,
                        c: 50
                    }]
                }, {
                    n: "Persian",
                    t: [6],
                    e: [{
                        f: 51
                    }]
                }, {
                    n: "Psyduck",
                    t: [4],
                    e: [{
                        t: 54,
                        c: 50
                    }]
                }, {
                    n: "Golduck",
                    t: [4],
                    e: [{
                        f: 53
                    }]
                }, {
                    n: "Mankey",
                    t: [10],
                    e: [{
                        t: 56,
                        c: 50
                    }]
                }, {
                    n: "Primeape",
                    t: [10],
                    e: [{
                        f: 55
                    }]
                }, {
                    n: "Growlithe",
                    t: [2],
                    e: [{
                        t: 58,
                        c: 50
                    }]
                }, {
                    n: "Arcanine",
                    t: [2],
                    e: [{
                        f: 57,
                        t: -1
                    }]
                }, {
                    n: "Poliwag",
                    t: [4],
                    e: [{
                        t: 60,
                        c: 25
                    }]
                }, {
                    n: "Poliwhirl",
                    t: [4],
                    e: [{
                        f: 59,
                        t: 61,
                        c: 100
                    }]
                }, {
                    n: "Poliwrath",
                    t: [4, 10],
                    e: [{
                        f: 60
                    }]
                }, {
                    n: "Abra",
                    t: [11],
                    e: [{
                        t: 63,
                        c: 25
                    }]
                }, {
                    n: "Kadabra",
                    t: [11],
                    e: [{
                        f: 62,
                        t: 64,
                        c: 100
                    }]
                }, {
                    n: "Alakazam",
                    t: [11],
                    e: [{
                        f: 63
                    }]
                }, {
                    n: "Machop",
                    t: [10],
                    e: [{
                        t: 66,
                        c: 25
                    }]
                }, {
                    n: "Machoke",
                    t: [10],
                    e: [{
                        f: 65,
                        t: 67,
                        c: 100
                    }]
                }, {
                    n: "Machamp",
                    t: [10],
                    e: [{
                        f: 66
                    }]
                }, {
                    n: "Bellsprout",
                    t: [0, 1],
                    e: [{
                        t: 69,
                        c: 25
                    }]
                }, {
                    n: "Weepinbell",
                    t: [0, 1],
                    e: [{
                        f: 68,
                        t: 70,
                        c: 100
                    }]
                }, {
                    n: "Victreebell",
                    t: [0, 1],
                    e: [{
                        f: 69
                    }]
                }, {
                    n: "Tentacool",
                    t: [1, 4],
                    e: [{
                        t: 72,
                        c: 50
                    }]
                }, {
                    n: "Tentacruel",
                    t: [1, 4],
                    e: [{
                        f: 71
                    }]
                }, {
                    n: "Geodude",
                    t: [8, 12],
                    e: [{
                        t: 74,
                        c: 25
                    }]
                }, {
                    n: "Graveler",
                    t: [8, 12],
                    e: [{
                        f: 73,
                        t: 75,
                        c: 100
                    }]
                }, {
                    n: "Golem",
                    t: [8, 12],
                    e: [{
                        f: 74
                    }]
                }, {
                    n: "Ponyta",
                    t: [2],
                    e: [{
                        t: 77,
                        c: 50
                    }]
                }, {
                    n: "Rapidash",
                    t: [2],
                    e: [{
                        f: 76
                    }]
                }, {
                    n: "Slowpoke",
                    t: [4, 11],
                    e: [{
                        t: 79,
                        c: 50
                    }]
                }, {
                    n: "Slowbro",
                    t: [4, 11],
                    e: [{
                        f: 78
                    }]
                }, {
                    n: "Magnemite",
                    t: [7, 13],
                    e: [{
                        t: 81,
                        c: 50
                    }]
                }, {
                    n: "Magneton",
                    t: [7, 13],
                    e: [{
                        f: 80
                    }]
                }, {
                    n: "Farfetch\u0027d",
                    t: [3, 6],
                    e: [{}]
                }, {
                    n: "Doduo",
                    t: [3, 6],
                    e: [{
                        t: 84,
                        c: 50
                    }]
                }, {
                    n: "Dodrio",
                    t: [3, 6],
                    e: [{
                        f: 83
                    }]
                }, {
                    n: "Seel",
                    t: [4],
                    e: [{
                        t: 86,
                        c: 50
                    }]
                }, {
                    n: "Dewgong",
                    t: [4, 14],
                    e: [{
                        f: 85
                    }]
                }, {
                    n: "Grimer",
                    t: [1],
                    e: [{
                        t: 88,
                        c: 50
                    }]
                }, {
                    n: "Muk",
                    t: [1],
                    e: [{
                        f: 87
                    }]
                }, {
                    n: "Shellder",
                    t: [4],
                    e: [{
                        t: 90,
                        c: 50
                    }]
                }, {
                    n: "Cloyster",
                    t: [4, 14],
                    e: [{
                        f: 89
                    }]
                }, {
                    n: "Gastly",
                    t: [1, 15],
                    e: [{
                        t: 92,
                        c: 25
                    }]
                }, {
                    n: "Haunter",
                    t: [1, 15],
                    e: [{
                        f: 91,
                        t: 93,
                        c: 100
                    }]
                }, {
                    n: "Gengar",
                    t: [1, 15],
                    e: [{
                        f: 92
                    }]
                }, {
                    n: "Onix",
                    t: [8, 12],
                    e: [{}]
                }, {
                    n: "Drowzee",
                    t: [11],
                    e: [{
                        t: 96,
                        c: 50
                    }]
                }, {
                    n: "Hypno",
                    t: [11],
                    e: [{
                        f: 95
                    }]
                }, {
                    n: "Krabby",
                    t: [4],
                    e: [{
                        t: 98,
                        c: 50
                    }]
                }, {
                    n: "Kingler",
                    t: [4],
                    e: [{
                        f: 97
                    }]
                }, {
                    n: "Voltorb",
                    t: [7],
                    e: [{
                        t: 100,
                        c: 50
                    }]
                }, {
                    n: "Electrode",
                    t: [7],
                    e: [{
                        f: 99
                    }]
                }, {
                    n: "Exeggcute",
                    t: [0, 11],
                    e: [{
                        t: 102,
                        c: 50
                    }]
                }, {
                    n: "Exeggutor",
                    t: [0, 11],
                    e: [{
                        f: 101
                    }]
                }, {
                    n: "Cubone",
                    t: [8],
                    e: [{
                        t: 104,
                        c: 50
                    }]
                }, {
                    n: "Marowak",
                    t: [8],
                    e: [{
                        f: 103
                    }]
                }, {
                    n: "Hitmonlee",
                    t: [10],
                    e: [{}]
                }, {
                    n: "Hitmonchan",
                    t: [10],
                    e: [{}]
                }, {
                    n: "Lickitung",
                    t: [6],
                    e: [{}]
                }, {
                    n: "Koffing",
                    t: [1],
                    e: [{
                        t: 109,
                        c: 50
                    }]
                }, {
                    n: "Weezing",
                    t: [1],
                    e: [{
                        f: 108
                    }]
                }, {
                    n: "Rhyhorn",
                    t: [8, 12],
                    e: [{
                        t: 111,
                        c: 50
                    }]
                }, {
                    n: "Rhydon",
                    t: [8, 12],
                    e: [{
                        f: 110
                    }]
                }, {
                    n: "Chansey",
                    t: [6],
                    e: [{}]
                }, {
                    n: "Tangela",
                    t: [0],
                    e: [{}]
                }, {
                    n: "Kangaskgan",
                    t: [6],
                    e: [{}]
                }, {
                    n: "Horsea",
                    t: [4],
                    e: [{
                        t: 116,
                        c: 50
                    }]
                }, {
                    n: "Seadra",
                    t: [4],
                    e: [{
                        f: 115
                    }]
                }, {
                    n: "Goldeen",
                    t: [4],
                    e: [{
                        t: 118,
                        c: 50
                    }]
                }, {
                    n: "Seaking",
                    t: [4],
                    e: [{
                        f: 117
                    }]
                }, {
                    n: "Staryu",
                    t: [4],
                    e: [{
                        t: 120,
                        c: 50
                    }]
                }, {
                    n: "Starmie",
                    t: [4, 11],
                    e: [{
                        f: 119
                    }]
                }, {
                    n: "Mr. Mime",
                    t: [9, 11],
                    e: [{}]
                }, {
                    n: "Scyther",
                    t: [3, 5],
                    e: [{}]
                }, {
                    n: "Jynx",
                    t: [11, 14],
                    e: [{}]
                }, {
                    n: "Electabuzz",
                    t: [7],
                    e: [{}]
                }, {
                    n: "Magmar",
                    t: [2],
                    e: [{}]
                }, {
                    n: "Pinsir",
                    t: [5],
                    e: [{}]
                }, {
                    n: "Tauros",
                    t: [6],
                    e: [{}]
                }, {
                    n: "Magikarp",
                    t: [4],
                    e: [{
                        t: 129,
                        c: 400
                    }]
                }, {
                    n: "Gyarados",
                    t: [3, 4],
                    e: [{
                        f: 128
                    }]
                }, {
                    n: "Lapras",
                    t: [4, 14],
                    e: []
                }, {
                    n: "Ditto",
                    t: [6],
                    e: []
                }, {
                    n: "Eevee",
                    t: [6],
                    e: [{
                        t: 133,
                        c: 25
                    }, {
                        t: 134,
                        c: 25
                    }, {
                        t: 135,
                        c: 25
                    }]
                }, {
                    n: "Vaporeon",
                    t: [4],
                    e: [{
                        f: 132
                    }]
                }, {
                    n: "Jolteon",
                    t: [7],
                    e: [{
                        f: 132
                    }]
                }, {
                    n: "Flareon",
                    t: [2],
                    e: [{
                        f: 132
                    }]
                }, {
                    n: "Porygon",
                    t: [6],
                    e: []
                }, {
                    n: "Omanyte",
                    t: [4, 12],
                    e: [{
                        t: 138,
                        c: 50
                    }]
                }, {
                    n: "Omastar",
                    t: [4, 12],
                    e: [{
                        f: 137
                    }]
                }, {
                    n: "Kabuto",
                    t: [4, 12],
                    e: [{
                        t: 140,
                        c: 50
                    }]
                }, {
                    n: "Kabutops",
                    t: [4, 12],
                    e: [{
                        f: 139
                    }]
                }, {
                    n: "Aerodactyl",
                    t: [3, 12],
                    e: []
                }, {
                    n: "Snorlax",
                    t: [6],
                    e: []
                }, {
                    n: "Articuno",
                    t: [3, 14],
                    e: []
                }, {
                    n: "Zapdos",
                    t: [3, 7],
                    e: []
                }, {
                    n: "Moltres",
                    t: [2, 3],
                    e: []
                }, {
                    n: "Dratini",
                    t: [16],
                    e: [{
                        t: 147,
                        c: 25
                    }]
                }, {
                    n: "Dragonair",
                    t: [16],
                    e: [{
                        f: 146,
                        t: 148,
                        c: 100
                    }]
                }, {
                    n: "Dragonite",
                    t: [3, 16],
                    e: [{
                        f: 147
                    }]
                }, {
                    n: "Mewtwo",
                    t: [11],
                    e: []
                }, {
                    n: "Mew",
                    t: [11],
                    e: []
                }];

                var types = ["Grass", "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric", "Ground", "Fairy", "Fighting", "Psychic", "Rock", "Steel", "Ice", "Ghost", "Dragon", "Dark"];


                function pad(num){
                    if(num < 10){
                        return '00'+num;
                    }
                    if(num < 100){
                        return '0'+num;
                    }
                    return num.toString();
                }

                //tack on calculated data
                _.each(pokemon, function(raw, idx){
                    _.extend(raw, {
                        num: idx+1,
                        numberAndName: '#'+pad(idx+1)+': '+raw.n,
                        imgUrl: '/site/img/pokemon/'+pad(idx+1)+'.png'
                    });
                });

                var evolvePokemon = _(pokemon).filter(function(raw){
                    //has evolution data & at least one cost value
                    return raw.e && raw.e.length && _.any(raw.e, 'c');

                }).map(function(raw){

                    return {
                        name: raw.n,
                        numberAndName: raw.numberAndName,
                        num: raw.num,
                        imgUrl: raw.imgUrl,
                        cost: _.get(_.find(raw.e,'c'),'c') //grab cost of first one
                    };

                }).value();


                return {
                    pokemon: pokemon,
                    evolvePokemon: evolvePokemon,
                    types: types
                };

            }]);

})();
