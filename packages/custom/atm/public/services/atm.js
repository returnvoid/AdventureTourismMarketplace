(function() {
    'use strict';

    function Atm($http, $q) {
        return {
            name: 'atm',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/atm/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.atm')
        .factory('Atm', Atm);

    Atm.$inject = ['$http', '$q'];

})();
