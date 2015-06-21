(function() {
  'use strict';
  
  angular
    .module('webApp.controllers')
    .controller('PortfolioController', Controller);
  
  //Controller.$inject = ['dependencies'];
  
  /* @ngInject */
  function Controller() {
    
    var vm = this;
    vm.title = 'Mis Trabajos';
    
    vm.jobs = [{id:1,thumbnail:'images/1.jpg',category:'app'},
               {id:2,thumbnail:'images/2.jpg',category:'web'},
               {id:3,thumbnail:'images/3.jpg',category:'web'}];
    
    vm.categories = _.uniq(_.pluck(vm.jobs,'category')); 
    
    ///////FUNCIONES PRIVADAS/////////
    function activate() {
    }
  }
})();