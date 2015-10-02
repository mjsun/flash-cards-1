app.directive('stats', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directive/stats/stats.html',
        scope: {},
        controller: function($scope, ScoreFactory){
            $scope.scores = ScoreFactory;
        }
    };
});