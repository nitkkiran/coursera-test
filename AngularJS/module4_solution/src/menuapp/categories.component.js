(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/data.template.html',
  bindings: {
    items: '<'
  }
});

})();
