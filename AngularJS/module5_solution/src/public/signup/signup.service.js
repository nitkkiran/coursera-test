(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'CategoryApiPath'];
    function SignupService($http, CategoryApiPath) {
        var service = this;
        service.information = new Object();
        service.isInfoAvailable = false;

        service.getCategoryMenuItems = function (shortname) {
            return $http.get(CategoryApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
                return response.status;
            }, function (response) {
                return response.status;
            });
        };

        service.saveInformation = function (FirstName, LastName, Email, Phone, FavDish) {
            service.isInfoAvailable = true;
            service.information.firstName = FirstName;
            service.information.lastName = LastName;
            service.information.email = Email;
            service.information.phone = Phone;
            service.information.favDish = FavDish;
        };

        service.GetIsInfoAvailable = function () {
            return service.isInfoAvailable;
        }

        service.GetInformation = function () {
            return service.information;
        }

        service.GetDescription = function (favDish) {
            return $http.get(CategoryApiPath + '/menu_items/' + favDish + '.json').then(function (response) {
                return response.data.description;
            });
        }

    }

})();