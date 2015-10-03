app.directive('newCard', function(FlashCardsFactory){
    return {
        restrict: 'E',
        templateUrl: '/app/directive/new-card/new-card.html',
        scope: {
            addOrUpdate:'&',
            newCard: '='
        },
        controller: function($scope){
         

            if(!$scope.newCard){
                $scope.newCard = {
                    question: null,
                    category: null,
                    answers: [
                        { text: null, correct: false },
                        { text: null, correct: false },
                        { text: null, correct: false }
                    ]
                };
            }
        
            console.log('New Card directive', $scope.newCard)

        }
    };
})