(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$log', 'MovieFactory', '$stateParams', '$sce'];



    /* @ngInject */
    function DetailController($log, MovieFactory, $stateParams, $sce) {
        var vm = this;
        vm.title = 'DetailController';
        vm.trail = '';


        var url = "http://www.omdbapi.com/?t=" + $stateParams.movieName;



        MovieFactory.getMovies(url).then(
            function(response) {
                vm.movies = response.data;
                console.log(vm.movies);
                // console.log(vm.movies);
            },
            function(error) {
                $log.error(error);
            });


        var url2 = "http://trailersapi.com/trailers.json?movie=" + $stateParams.movieName + "& limit=1&width=320";

         MovieFactory.getMovies(url2).then(
            function(response) {
                vm.trailer = response.data;
                console.log(vm.trailer);
                vm.trail = vm.trailer[0].code;
                vm.trail = $sce.trustAsHtml(vm.trail);
                // console.log(vm.movies);

                console.log(vm.trail);
            },
            function(error) {
                $log.error(error);
            });






    }
})();
