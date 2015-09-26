app.directive('flashCard', function(){
    return {
        restrict: 'E',
        templateUrl: '/directives/flash-card/flashCard.html',
        scope: {
            flashCard : '='
        },
        controller: function($scope, ScoreFactory){
            $scope.answerQuestion = function(answer, flashCard) {
                if (!flashCard.answered) {
                    flashCard.answered = true;

                    if (answer.correct)
                        ScoreFactory.setCorrect();
                    else
                        ScoreFactory.setIncorrect();

                    flashCard.answeredCorrectly = answer.correct;
                }

            }
        }
    };
});