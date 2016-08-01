(function () {
    'use strict';

    // define top-level module container
    var app = angular.module('app', ['ui.router', 'ngSanitize']);

    // additional configuration goes here

        app.config(function($stateProvider, $urlRouterProvider) {
          //
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/main");
          //
          // Now set up the states
          $stateProvider
          .state('main', {
              url: "/main",
              templateUrl: "app/partials/main.html",
              controller: "MainController as vm"
             
            })
            .state('state1', {
              url: "/state1/:movieName",
              templateUrl: "app/partials/state1.html",
              controller: "DetailController as vm"

            });
                        
        });


})();