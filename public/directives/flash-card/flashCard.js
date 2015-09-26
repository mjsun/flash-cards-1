app.directive('flashCard', function(){
    return {
        restrict: 'E',
        templateUrl: '/directives/flash-card/flashCard.html',
        scope: {
            flashCard : '='
        }
    };
});