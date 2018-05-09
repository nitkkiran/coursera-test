(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope', 'SignupService'];
    function SignupController($scope, SignupService) {
        var $ctrl = this;
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.favDish = "";
        $scope.favoritedishinvalid = false;
        $scope.responseMsg = "";
        $scope.submit = function () {
            $scope.favoritedishinvalid = false;
            $scope.responseMsg = "";
            var status = SignupService.getCategoryMenuItems($scope.favDish).then(function (response) {
                if (response === 200)
                {
                    $scope.responseMsg = "Your information has been saved";
                }
                else
                {
                    $scope.favoritedishinvalid = true;
                }
            });
        };
    }


})();