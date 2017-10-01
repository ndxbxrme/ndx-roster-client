'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx', []
module.run (socket, $timeout, $rootScope) ->
  socket.on 'roster', (users) ->
    $timeout ->
      $rootScope.roster = users