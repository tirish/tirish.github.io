(function(_, $){

    angular.module('tirish.github.io.app',
        [
            'ui.bootstrap',
            'ngRoute',
            'ngAnimate',
            'ui.select',
            'ngSanitize',
            'LocalStorageModule',
            'tirish.github.io.util.ui'
        ])
        .constant('_',_)
        .constant('$',$)
        .config(['$routeProvider','localStorageServiceProvider',
            function($routeProvider, localStorageServiceProvider){
                var views = './site/views';
                function view(path){
                    return views+path+'.html';
                }
                $routeProvider
                    .when('/', {
                        templateUrl:view('/home'),
                        controller: 'homeCtrl'
                    })
                    .when('/pokemon/evolve-calculator', {
                        templateUrl:view('/pokemon/evolve-calculator'),
                        controller: 'evolveCtrl'
                    })
                    .when('/pokemon/pokedex', {
                        templateUrl:view('/pokemon/pokedex'),
                        controller: 'pokedexCtrl'
                    })
                    .otherwise({
                        redirect:'/'
                    });

                localStorageServiceProvider.setPrefix('v2');//version will change with breaking changes
            }]);


})(window._, window.$);
