(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective)
    .constant('ApiPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItemsList.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'narrowItDown',
      bindToController: true
    };

    return ddo;
  }

  function NarrowItDownDirectiveController() {
    var narrowItDown = this;
    narrowItDown.checkEmptyList = function() {
      return (narrowItDown.found.length == 0);
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService', '$scope'];

  function NarrowItDownController(MenuSearchService, $scope) {
    var narrowItDown = this;
    $scope.searchTerm = "";
    narrowItDown.found = [];

    narrowItDown.search = function() {
      if ($scope.searchTerm.length > 0) {
        var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);
        promise.then(function(response) {
          narrowItDown.found = response;
        })
      }
    };

    narrowItDown.removeItem = function(itemIndex) {
      narrowItDown.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiPath'];

  function MenuSearchService($http, ApiPath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
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
