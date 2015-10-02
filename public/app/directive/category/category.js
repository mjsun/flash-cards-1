app.directive('categoryDropdown', function(){
    return {
        restrict: 'E',
        scope: {
            currentCategory: '='
        },
        templateUrl: '/app/directive/category/category.html',
        controller: function($scope){

            $scope.categories = [
                'MongoDB',
                'Express',
                'Angular',
                'Node',
                'Show All'
            ];

            $scope.getCategoryCards = function(category) {
                $scope.currentCategory = category;
                console.log($scope.currentCategory);
            };
        }
    }
});