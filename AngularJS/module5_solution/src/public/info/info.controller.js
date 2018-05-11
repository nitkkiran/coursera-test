(function () {
    "use strict";

    angular.module('public')
        .controller('InfoController', InfoController);

    InfoController.$inject = ['$scope', 'SignupService'];
    function InfoController($scope, SignupService) {
        var $ctrl = this;
        $scope.infoAvailable = SignupService.GetIsInfoAvailable();
        if ($scope.infoAvailable) {
            var information = SignupService.GetInformation();
            $scope.firstName = information.firstName;
            $scope.lastName = information.lastName;
            $scope.email = information.email;
            $scope.phone = information.phone;
            $scope.favDish = information.favDish;
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