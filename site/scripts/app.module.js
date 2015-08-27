(function(){


    angular.module('tirish.github.io.app',['ui.bootstrap','ngRoute','ngAnimate'])
        .config(['$routeProvider','$locationProvider',
            function($routeProvider, $locationProvider){
                var views = './site/views';
                function view(path){
                    return views+path+'.html';
                }
                $routeProvider
                    .when('/', {
                        templateUrl:view('/home'),
                        controller: 'homeCtrl'
                    })
                    .when('/test', {
                        templateUrl:view('/test1'),
                        controller: 'testCtrl'
                    })
                    .otherwise({
                        redirect:'/'
                    });

                $locationProvider.html5Mode(true);
            }]);


})();