(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$log', 'MovieFactory'];



    /* @ngInject */
    function MainController($log, MovieFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.movie = '';


        vm.newMovies = function() {

            var first = "http://www.omdbapi.com/?s=";
            var url = first + vm.movie;

            MovieFactory.getMovies(url).then(
                function(response) {
                    vm.movies = response.data;
                    // console.log(vm.movies);
                },
                function(error) {
                    $log.error(error);
                });


        };


    }
})();
