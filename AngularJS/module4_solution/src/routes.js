(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/main-categorieslist.template.html',
        controller: 'MainCategoriesListController as mainList',
        resolve: {
          items: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function(response) {
                return response.data;
              });
          }]
        }
      })

      .state('items', {
        url: '/items/{itemName}',
        templateUrl: 'src/menuapp/templates/main-itemslist.template.html',
        controller: 'ItemDetailController as itemDetail',
        resolve: {
          categoryitems: ['$stateParams', 'MenuDataService',
            function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemName)
                .then(function(response) {
                  var itemsOfCategory = response.data.menu_items;
                  console.log(itemsOfCategory);
                  return itemsOfCategory;
                });
            }
          ]
        }
      });
  }

})();
