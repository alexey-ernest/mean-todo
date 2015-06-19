((window, angular) ->
  'use strict';

  app = angular.module 'todo', []

  app.controller 'mainController', ['$scope', '$http', ($scope, $http) ->
    $scope.formData = {}
    $scope.todos = []

    $scope.createTodo = ->
      $http.post '/api/todos', $scope.formData
        .success (data) -> 
          $scope.formData = {}
          $scope.todos.push data
          return
        .error (err) -> 
          console.error err
          return
      return

    $scope.deleteTodo = (todo) ->
      $http.delete 'api/todos' + todo._id
        .success ->
          idx = $scope.todos.indexOf todo
          $scope.todos.splice idx, 1
          return
        .error (err) ->
          console.log(err)
          return
      return

    load = ->
      $http.get 'api/todos'
        .success (data) ->
          $scope.todos = data
          return
        .error (err) ->
          console.log(err)
          return
      return

    # loading todos
    load()

    return
  ]

  return
)(window, window.angular)