(function(){

    angular.module('tirish.github.io.util.misc',[])
        .factory('timeHelper', ['$interval', function($interval){

            var constants = {
                OneSecond: 1000
            };

            function Timer(min, sec){
                var self = this;
                var interval;

                self.config = {
                    min: min,
                    sec: sec
                };

                self.init = function(){
                    self.min = self.config.min || 0;
                    self.sec = self.config.sec || 0;
                    self.running = false;
                    self.total = self.min * 60 + self.sec;
                    self.elapsed = 0;
                };
                self.init();

                self.pause = function(){
                    if(interval){
                        $interval.cancel(interval);
                        interval = null;
                    }
                    self.running = false;
                };

                self.stop = function(){
                    self.pause();
                    self.init();
                };

                self.start = function(){

                    if(self.total === 0){
                        return; //nothing to do
                    }

                    if(self.elapsed === self.total){
                        //restart
                        self.init();
                    }

                    self.running = true;
                    interval = $interval(function(){
                        if(self.sec <=0){
                            self.sec = 59;
                            self.min-= 1;
                        } else {
                            self.sec-= 1;
                        }
                        self.elapsed++;
                        if(self.min <= 0 && self.sec <= 0){
                            self.pause();
                        }
                    }, constants.OneSecond);
                };

            }

            return {
                createTimer: function(min, sec){
                    return new Timer(min, sec);
                }
            };

        }]);

})();