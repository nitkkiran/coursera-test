(function() {
  'use strict';

  angular.module('data')
    .controller('ItemDetailController', ItemDetailController);


  ItemDetailController.$inject = ['categoryitems'];

  function ItemDetailController(categoryitems) {
    var itemDetail = this;
    itemDetail.categoryitems = categoryitems;
  }

})();
