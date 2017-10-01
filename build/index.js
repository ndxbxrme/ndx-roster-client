(function() {
  'use strict';
  var e, error, module;

  module = null;

  try {
    module = angular.module('ndx');
  } catch (error) {
    e = error;
    module = angular.module('ndx', []);
  }

  module.run(function(socket, $timeout, $rootScope) {
    return socket.on('roster', function(users) {
      return $timeout(function() {
        return $rootScope.roster = users;
      });
    });
  });

}).call(this);

//# sourceMappingURL=index.js.map
