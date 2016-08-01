(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieFactory', MovieFactory); // https://docs.angularjs.org/guide/services

    MovieFactory.$inject = ['$http', '$log', '$q']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function MovieFactory($http, $log, $q) {

        var service = {
            getMovies: getMovies
        };
        return service;



        function getMovies(url) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: url
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('We found your movie!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('No movie found </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }

//http://trailersapi.com/trailers.json?movie=Green%20Mile&limit=1&width=320

        function getTrailer(url2) {

            var defer = $q.defer();

            $http({
                method: 'GET',
                url: url2
            }).then(function(response) {
                    if (typeof response.data === 'object') {
                        defer.resolve(response);
                        toastr.success('We found your trailer!');
                    } else {
                        defer.reject(response);
                        //error if found but empty
                        toastr.warning('No trailer found </br>' + response.config.url);
                    }
                },
                // failure
                function(error) {
                    //error if the file isn't found
                    defer.reject(error);
                    $log.error(error);
                    toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                });

            return defer.promise;
        }



    }

})();
