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
            var promise = MenuDataService.getAllCategories();
            promise.then(function(response) {
              console.log(response.data);
              return response.data;
            })

          }]
        }
      });
  }

})();
