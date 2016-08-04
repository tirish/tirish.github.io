(function(){

    angular.module('tirish.github.io.util.ui',
        [
            'ngAnimate',
            'ui.bootstrap'
        ])
        .controller('confirmationModalCtrl', ['$scope','$modalInstance','modalConfig',
            function($scope,$modalInstance,modalConfig){

                $scope.config = modalConfig;

                $scope.confirm = function(){
                    $modalInstance.close(true);
                };

                $scope.cancel = function(){
                    $modalInstance.dismiss('cancel');
                };

            }])
        .factory('confirmationModal',['$modal',
            function($modal){

                function confirm(text, callback, canceled){

                    var config = {
                        text: text
                    };

                    //template compiled using http://jade-lang.com/demo/
                    // based on views/include/confirmModal.jade

                    var m = $modal.open({
                        animation: true,
                        controller: 'confirmationModalCtrl',
                        template: '<div class="modal-header"><h3 class="modal-title">Confirm</h3></div><div class="modal-body"><p>{{config.text}}</p></div><div class="modal-footer"><button ng-click="confirm()" class="btn btn-primary">Confirm</button><button ng-click="cancel()" class="btn btn-danger">Cancel</button></div>',
                        size: 'sm',
                        resolve: {
                            modalConfig: function () {
                                return config;
                            }
                        }
                    });

                    m.result.then(
                        function (res) {
                            //confirmed
                            if (res && callback) {
                                callback();
                            }
                        },
                        function () {
                            //dismissed
                            if (canceled)
                                canceled();
                        }
                    );
                }

                return confirm;

            }]);

})();