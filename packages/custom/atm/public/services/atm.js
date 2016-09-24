(function() {
    'use strict';

    function AtmLogService(){
      return{
        log: function(message){
          console.log.apply(message);
        }
      }
    } 
    function AtmTestService($http, $q) {
        return {
            name: 'atm',
            test: function(){
              var deferred = $q.defer();
              $http.get('/api/atm/test').then(function(response){
                deferred.resolve(response);
              }, function(response){
                deferred.reject(response);
              });
              return deferred.promise;
            }
        };
    }

    angular
        .module('mean.atm')
        .factory('AtmLogService', AtmLogService)
        .factory('AtmTestService', AtmTestService);

    AtmTestService.$inject = ['$http', '$q'];

})();
