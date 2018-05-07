(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope'];
    function SignupController($scope) {
        var $ctrl = this;
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.favDish = "";
        $scope.favoritedishinvalid = false;
        $scope.submit = function () {
            console.write("Submit Clicked");

        };
    }


})();