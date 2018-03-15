(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ['MenuSearchService', '$scope'];

  function NarrowItDownController(MenuSearchService, $scope) {
    var narrowItDown = this;
    $scope.searchTerm = "";

    narrowItDown.search = function() {
      console.log("Search function called for search term " + $scope.searchTerm);
      var found = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
      console.log(found);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiPath'];

  function MenuSearchService($http, ApiPath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      console.log("getMatchedMenuItems function called for search term " + searchTerm);
      return $http({
        method: "GET",
        url: (ApiPath),
      }).then(function(result) {
        // process result and only keep items that match
        var foundItems = [];
        var items = result.data.menu_items;
        for (var i = 0; i < items.length; i++) {
          var description = items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(items[i]);
          }
        }
        // return processed items
        return foundItems;
      });

    };
  }

})();
