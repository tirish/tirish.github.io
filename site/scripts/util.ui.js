(function(){

    angular.module('tirish.github.io.util.ui',
        [
            'ngAnimate',
            'ui.bootstrap'
        ])
        .directive('scrollAnchor',['$', function($){

            return {
                restrict: 'A',
                link: function(scope, element, attrs){

                    var anchor = $('<div class="scroll-anchor" style="height:0px;margin:0;padding:0;"></div>');
                    $(element).before(anchor);

                    var offset = parseInt(attrs.scrollAnchorOffset) || 0;
                    var origHeight = $(element).css('height');

                    //Based on: https://www.virendrachandak.com/techtalk/make-a-div-stick-to-top-when-scrolled-to/

                    // This function will be executed when the user scrolls the page.
                    $(window).scroll(function(e) {
                        // Get the position of the location where the scroller starts.
                        var scrollerAnchor = anchor.offset().top;
                        var scrollLocation = $(this).scrollTop() + offset;
                        var position = $(element).css('position');


                        // Check if the user has scrolled and the current position is after the scroller start location and if its not already fixed at the top
                        if (scrollLocation >= scrollerAnchor && position != 'fixed')
                        {    // Change the CSS of the scroller to hilight it and fix it at the top of the screen.
                            $(element).css({
                                'position': 'fixed',
                                'top': offset+'px'
                            });
                            // Changing the height of the scroller anchor to that of scroller so that there is no change in the overall height of the page.
                            anchor.css('height', origHeight);
                        }
                        else if (scrollLocation < scrollerAnchor && position != 'relative')
                        {    // If the user has scrolled back to the location above the scroller anchor place it back into the content.

                            // Change the height of the scroller anchor to 0 and now we will be adding the scroller back to the content.
                            anchor.css('height', '0px');

                            // Change the CSS and put it back to its original position.
                            $(element).css({
                                'top': '0px',
                                'position': 'relative'
                            });
                        }
                    });

                }

            };


        }])
        .directive('backToTop',[function(){

            return {
                restrict: 'A',
                link: function (scope, element) {

                    var offset = 220;
                    var duration = 500;
                    $(window).scroll(function () {
                        if ($(window).scrollTop() > offset) {
                            $(element).fadeIn(duration);
                        } else {
                            $(element).fadeOut(duration);
                        }
                    });

                    element.bind('click', function (event) {
                        event.preventDefault();
                        $('html, body').animate({scrollTop: 0}, duration);
                    });

                }
            };

        }])
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