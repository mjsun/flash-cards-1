app.directive('flashCard', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directive/flash-card/flashCard.html',
        scope: {
            flashCard : '=',
            deleteFlashCard: '&'
        },
        controller: function($scope, ScoreFactory, FlashCardsFactory, $rootScope){
            $scope.answerQuestion = function(answer, flashCard) {
                if (!flashCard.answered) {
                    flashCard.answered = true;

                    if (answer.correct)
                        ScoreFactory.setCorrect();
                    else
                        ScoreFactory.setIncorrect();

                    flashCard.answeredCorrectly = answer.correct;
                }
            };

            $scope.removeCurrent = function(card){
                FlashCardsFactory.removeCard(card).then(function(res){
                    $scope.deleteFlashCard({card:card});
                });
            };

            $scope.editCurrent = function(card){
                FlashCardsFactory.setCurrentCard(card);
                $rootScope.$broadcast('setCurrent');
            };
        }
    };
});