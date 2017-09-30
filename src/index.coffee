'use strict'
module = null
try
  module = angular.module 'ndx'
catch e
  module = angular.module 'ndx-roster-client', []
