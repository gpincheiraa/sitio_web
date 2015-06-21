(function(){

'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */

angular.module('webApp.controllers',[]);
angular.module('webApp.services',[]);
angular.module('webApp.directives',[]);
angular.module('webApp.filters',[]);

angular
  .module('webApp',[

    'ui.router',
    'ng.deviceDetector',
    'pasvaz.bindonce',
    // 'iso.directives',

    'webApp.controllers',
    'webApp.services',
    'webApp.directives',
    'webApp.filters'])

  .config(['$stateProvider','$urlRouterProvider',config])
  .run(['$state','$rootScope','deviceDetector',run]);
  
  /*
   * @description
   * # config function
   *
   *  Description of the providers
   */
  
  function config($stateProvider,$urlRouterProvider){
    
    $stateProvider
      .state('app', {
        url: '/',
        controller: 'MainController as vm',
        templateUrl: 'app/main/main.html',
      })
        .state('app.portfolio',{
          url: 'portfolio',
          templateUrl: 'app/portfolio/portfolio.html',
        })
        .state('app.about',{
          url: 'about',
          templateUrl: 'app/about/about.html',
        })

      
      $urlRouterProvider.otherwise('/');
  }
  
  /*
   * @description
   * # run function
   *
   *  Description of the run parameters and functions
   */

  function run($state,$rootScope){
    
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      
    });

  }
})();