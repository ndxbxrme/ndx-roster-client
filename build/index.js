(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx-roster-client', []);
  }

}).call(this);

//# sourceMappingURL=index.js.map
