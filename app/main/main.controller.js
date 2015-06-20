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

    if(!vm.isMobile)
      $state.go('app.portfolio');

  }
})();