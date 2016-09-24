(function() {
    'use strict';

    function Atm($stateProvider) {
        $stateProvider.state('atm example page', {
            url: '/atm/example',
            templateUrl: 'atm/views/index.html'
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
