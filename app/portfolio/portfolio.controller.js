(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('PortfolioController', Controller);
  
  //Controller.$inject = ['dependencies'];
  
  /* @ngInject */
  function Controller() {
    
    var vm = this;
    vm.title = 'Portfolio';
    activate();
    
    ///////FUNCIONES PRIVADAS/////////
    function activate() {
    }
  }
})();