(function(window, angular) {
  'use strict';
  var app;
  app = angular.module('todo', []);
  app.controller('mainController', [
    '$scope', '$http', function($scope, $http) {
      var load;
      $scope.formData = {};
      $scope.todos = [];
      $scope.createTodo = function() {
        $http.post('/api/todos', $scope.formData).success(function(data) {
          $scope.formData = {};
          $scope.todos.push(data);
        }).error(function(err) {
          console.error(err);
        });
      };
      $scope.deleteTodo = function(todo) {
        $http["delete"]('api/todos' + todo._id).success(function() {
          var idx;
          idx = $scope.todos.indexOf(todo);
          $scope.todos.splice(idx, 1);
        }).error(function(err) {
          console.log(err);
        });
      };
      load = function() {
        $http.get('api/todos').success(function(data) {
          $scope.todos = data;
        }).error(function(err) {
          console.log(err);
        });
      };
      load();
    }
  ]);
})(window, window.angular);
