(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('MainController', MainController);
  
  //MainController.$inject = [''];
  
  /* @ngInject */
  function MainController() {
    
    var vm = this;
    vm.title = 'Titulo';
    activate();
    
    ///////FUNCIONES PRIVADAS/////////
    function activate() {
    }
  }
})();