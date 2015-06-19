(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('MainController', MainController);
  
  MainController.$inject = ['deviceDetector','$state'];
  
  /* @ngInject */
  function MainController(deviceDetector,$state) {
    
    var vm = this;
    
    vm.isDesktop = deviceDetector.isDesktop();

    if(vm.isDesktop)
      $state.go('app.portfolio');

  }
})();