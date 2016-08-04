(function(){


    angular.module('tirish.github.io.app',['ui.bootstrap','ngRoute','ngAnimate', 'ui.select', 'ngSanitize'])
        .config(['$routeProvider','$locationProvider',
            function($routeProvider){
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
                    .otherwise({
                        redirect:'/'
                    });

            }]);


})();