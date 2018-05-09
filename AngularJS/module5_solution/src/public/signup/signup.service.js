(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'CategoryApiPath'];
    function SignupService($http, CategoryApiPath) {
        var service = this;

        service.getCategoryMenuItems = function (shortname) {
            return $http.get(CategoryApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
                return response.status;
            }, function (response) {
                return response.status;
            });
        };

    }

})();