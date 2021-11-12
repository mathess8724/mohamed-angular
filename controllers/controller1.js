let app = angular.module('customersApp', ['ngRoute']);
app.controller('CustomersController',function ($scope) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.a = 'fas fa-sort-amount-up'
    $scope.b = 'fas fa-sort-amount-down'
    
    $scope.persons= [{ name:'Mohamed', dateOfBirth: '1996-12-26', ExpensesYear: 10000, Country:"Tunisia"}
    , {name:'Mathieu',dateOfBirth: '1988-10-22',  ExpensesYear: 10300, Country:"France"},
    {name:'Roman',dateOfBirth: '1990-09-13',  ExpensesYear: 13620, Country:"France"}];
    $scope.doSort = function(propName) {
       $scope.sortBy = propName;
       $scope.reverse = !$scope.reverse;
    };
    
});