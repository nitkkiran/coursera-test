(function () {
    "use strict";

    angular.module('public')
        .controller('InfoController', InfoController);

    InfoController.$inject = ['$scope', 'SignupService', 'CategoryApiPath'];
    function InfoController($scope, SignupService, CategoryApiPath) {
        var $ctrl = this;
        $scope.infoAvailable = SignupService.GetIsInfoAvailable();
        if ($scope.infoAvailable) {
            var information = SignupService.GetInformation();
            $scope.firstName = information.firstName;
            $scope.lastName = information.lastName;
            $scope.email = information.email;
            $scope.phone = information.phone;
            $scope.favDish = information.favDish;
            SignupService.GetDescription($scope.favDish).then(function (response) {
                $scope.favDishDescription = response;
                console.log($scope.favDishDescription);
            });
            $scope.ApiPath = CategoryApiPath;
        }

        $scope.submit = function () {
            $scope.favoritedishinvalid = false;
            $scope.responseMsg = "";
            var status = SignupService.getCategoryMenuItems($scope.favDish).then(function (response) {
                if (response === 200) {
                    SignupService.saveInformation($scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.favDish);
                    $scope.responseMsg = "Your information has been saved";
                }
                else {
                    $scope.favoritedishinvalid = true;
                }
            });
        };
    }


})();