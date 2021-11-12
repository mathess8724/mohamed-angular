const app = angular.module('customersApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            { controller: 'CustomersController', templateUrl: 'views/1stview.html' })
        .otherwise({ redirect: '/' })
});
