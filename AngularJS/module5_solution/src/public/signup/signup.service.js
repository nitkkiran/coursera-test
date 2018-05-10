(function () {
    "use strict";

    angular.module('public')
        .service('SignupService', SignupService);

    SignupService.$inject = ['$http', 'CategoryApiPath'];
    function SignupService($http, CategoryApiPath) {
        var service = this;
        var firstName = "";
        var lastName = "";
        var email = "";
        var phone = "";
        var favDish = "";

        service.getCategoryMenuItems = function (shortname) {
            return $http.get(CategoryApiPath + '/menu_items/' + shortname + '.json').then(function (response) {
                return response.status;
            }, function (response) {
                return response.status;
            });
        };

        service.saveInformation = function (FirstName, LastName, Email, Phone, FavDish) {
            service.firstName = FirstName;
            service.lastName = LastName;
            service.email = Email;
            service.phone = Phone;
            service.favDish = FavDish;
            console.log(service.firstName);
            console.log(service.lastName);
            console.log(service.email);
            console.log(service.phone);
            console.log(service.favDish);
        };
    }

})();