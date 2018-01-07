(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.outputOfCheck = "";
        $scope.checkTooMuch = function () {
            var inputDishes = $scope.dishes;
            if (inputDishes.length === 0) {
                $scope.outputOfCheck = "Please enter data first";
            }
            else {
                var arrayOfDishes = inputDishes.split(",");
                if(arrayOfDishes.length <= 3)
                {
                    $scope.outputOfCheck = "Enjoy!"
                }
                else {
                    $scope.outputOfCheck = "Too much!"
                }
            }

        };

    }

})();
