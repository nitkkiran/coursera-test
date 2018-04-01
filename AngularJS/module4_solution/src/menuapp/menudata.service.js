(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('CategoriesApiPath', "https://davids-restaurant.herokuapp.com/categories.json")
    .constant('ItemsApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");


  MenuDataService.$inject = ['$http', 'CategoriesApiPath', 'ItemsApiPath']
  function MenuDataService($http, CategoriesApiPath, ItemsApiPath) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (CategoriesApiPath)
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: "GET",
        url: (CategoriesApiPath + categoryShortName)
      });
    };

  }

})();
