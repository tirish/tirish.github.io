(function(){

    angular.module('tirish.github.io.app')
        .controller('testCtrl',['$scope',
            function($scope){
                $scope.hello='hi there';
            }]);

})();