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
    }


})();