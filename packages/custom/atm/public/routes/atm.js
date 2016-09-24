(function() {
    'use strict';

    function Atm($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'atm/views/home.html'
      }).state('atm circles example', {
        url: '/atm/example/:circle',
        templateUrl: 'atm/views/example.html'
      });
    }

    angular
        .module('mean.atm')
        .config(Atm);

    Atm.$inject = ['$stateProvider'];
})();
