(function() {
    'use strict';

    /* jshint -W098 */

    function HomeController($scope, Global, AtmTestService, AtmLogService, $stateParams) {
      var vm = this;
      console.log('here home');
      
    }
    
    function SearchBarController($scope, Global, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'atm'
        };
    }

    angular
      .module('mean.atm')
      .controller('HomeController', HomeController)
      .controller('SearchBarController', SearchBarController);

    HomeController.$inject = ['$scope', 'Global', '$stateParams', 'AtmLogService', 'AtmTestService'];

})();
