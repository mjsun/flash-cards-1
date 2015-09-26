app.directive('stats', function(){
    return {
        restrict: 'E',
        templateUrl: '/directives/stats/stats.html',
        scope: {},
        controller: function($scope, ScoreFactory){
            $scope.scores = ScoreFactory;
        }
    };
});