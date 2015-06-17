(function (window, angular) {
    'use strict';

    var app = angular.module('todo', []);  

    app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
        $scope.formData = {};
        $scope.todos = [];

        $scope.createTodo = function () {
            $http.post('/api/todos', $scope.formData)
                .success(function (data) {
                    $scope.formData = {};
                    $scope.todos = data;
                })
                .error(function (error) {
                    console.error(error);
                });
        };

        $scope.deleteTodo = function (todo) {
            $http.delete('/api/todos/' + todo._id)
                .success(function() {
                    var idx = $scope.todos.indexOf(todo);
                    $scope.todos.splice(index, 1);
                })
                .error(function (error) {
                    console.error(error);
                });
        };

        function load() {
            $http.get('/api/todos')
                .success(function (data) {
                    $scope.todos = data;
                })
                .error(function (error) {
                    console.error(error);
                });
        }

        load();
    }]);
    
})(window, window.angular);
