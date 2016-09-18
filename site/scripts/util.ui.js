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
        .factory('uiHelpers', ['$', function($){
           function isMobile() {
                var check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
           }

            function scrollTo(verticalOffset, scrollDuration){
                if(!scrollDuration || scrollDuration < 0){
                    scrollDuration = 0;
                }

                $('html, body').animate({
                   scrollTop: verticalOffset
                }, scrollDuration);

            }


            return {
                isMobile: isMobile(),
                scrollTo: scrollTo
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

            }])
            .filter('numberFixedLen', function () {
                //pad number
                return function (n, len) {
                    var num = parseInt(n, 10);
                    len = parseInt(len, 10);
                    if (isNaN(num) || isNaN(len)) {
                        return n;
                    }
                    num = ''+num;
                    while (num.length < len) {
                        num = '0'+num;
                    }
                    return num;
                };
            });

})();