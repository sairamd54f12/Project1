var app = angular.module('myApp', ['ngResource','ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

   
        .state('login', {
            url: '/login',
            templateUrl: 'html/login.html',
            controller:'loginController'
        })

       
        .state('logout', {
            url: '/logout',
            templateUrl: 'html/logout.html',
            controller:'logoutController'
           
        });

});