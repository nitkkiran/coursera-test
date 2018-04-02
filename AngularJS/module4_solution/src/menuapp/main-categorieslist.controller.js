(function() {
  'use strict';

  angular.module('data')
    .controller('MainCategoriesListController', MainCategoriesListController);


  MainCategoriesListController.$inject = ['items'];

  function MainCategoriesListController(items) {
    var mainList = this;
    mainList.items = items;
  }

})();
