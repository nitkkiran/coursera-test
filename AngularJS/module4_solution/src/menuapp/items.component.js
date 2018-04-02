(function() {
  'use strict';

  angular.module('data')
    .component('categoryitems', {
      templateUrl: 'src/menuapp/templates/categories.template.html',
      bindings: {
        categoryitems: '<'
      }
    });

})();
