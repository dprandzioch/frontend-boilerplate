'use strict'

class ExampleController

  @$inject: [ "$scope" ]
  constructor: ($scope) ->
    $scope.headline = "Some JavaScript headline"

angular.module("FrontendBoilerplateApp").controller "ExampleController", ExampleController
