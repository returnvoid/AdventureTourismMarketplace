(function() {
    'use strict';

    /* jshint -W098 */

    function AtmController($scope, Global, Atm, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'atm'
        };

        $scope.checkCircle = function() {
            Atm.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.atm')
        .controller('AtmController', AtmController);

    AtmController.$inject = ['$scope', 'Global', 'Atm', '$stateParams'];

})();
