(function () {
    'use strict';

        angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('BoughtController', BoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
      toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

      toBuy.itemBought = function (item) {
    ShoppingListCheckOffService.itemBought(item);
  }
    }

BoughtController.$inject = ['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService) {
   var bought = this;
   bought.itemsBought = ShoppingListCheckOffService.getboughtItems();
}


    function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [{"name":"Apples","quantity":3},
                    {"name":"Oranges","quantity":4},
                    {"name":"Lemons","quantity":2},
                    {"name":"Bananas","quantity":5},
                    {"name":"WaterMelons","quantity":6}];

// List of already bought items
  var boughtItems=[];

  service.itemBought = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex,1);
  };

  service.getItemsToBuy = function () {
    return toBuyItems;
  };

  service.getboughtItems = function () {
    return boughtItems;
  };
}

})();
