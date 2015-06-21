(function() {
  'use strict';
  
  angular
    .module('webApp.directives')
    .directive('gpMixitupContainer', MixitupContainer);
  
  /* @ngInject */
  function MixitupContainer(){

    var directive = {
        link: link,
        restrict: 'A'
    };
    return directive;

    function link(scope,element,attrs){

      scope.$on('load',function(){
        
        element.mixItUp({
          callbacks: {
            onMixFail: function(state){ 
              console.log('No elements found matching ',state);
            },
            onMixStart: function(state, futureState){ 
              console.log('Animation starting',state); 
            }
          }
        });
      
      });
    };

  };

  /////////////////////////////////////////////////////
  angular
    .module('webApp.directives')
    .directive('gpMixitupItem', MixitupItem);

  MixitupItem.$inject = ['$timeout'];

  /* @ngInject */
  function MixitupItem($timeout){

    var directive = {
        link: link,
        restrict: 'A'
    };

    return directive;

    function link(scope,element,attrs){
      if(scope.$last){
        $timeout(function(){
          scope.$emit('load');
        }); 
      }
    }

  }

})();