(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('MainController', MainController);
  
  MainController.$inject = ['deviceDetector','$state'];
  
  /* @ngInject */
  function MainController(deviceDetector,$state) {
    
    var vm = this;
    
    vm.isMobile = deviceDetector.isMobile();
    vm.isOpenMenu = false;

    vm.goToState = go;

    if(!vm.isMobile)
      go('app.portfolio')

    // Functions of the controller
    function go(stateName){
      $state.go(stateName);
    }

  }
})();