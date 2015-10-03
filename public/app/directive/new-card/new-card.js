app.directive('newCard', function(FlashCardsFactory){
    return {
        restrict: 'E',
        templateUrl: '/app/directive/new-card/new-card.html',
        scope: {
            addFlashCard:'&'
        },
        controller: function($scope, $http){
            var emptyObj = {
                question: null,
                category: null,
                answers: [
                    { text: null, correct: false },
                    { text: null, correct: false },
                    { text: null, correct: false }
                ]
            };

            var currentCard = FlashCardsFactory.getCurrentCard();

            $scope.newCard = (! currentCard ) ? angular.copy(emptyObj) : currentCard;

            $scope.submitForm = function(){
                FlashCardsFactory.addCard($scope.newCard).then(function(res){
                    $scope.addFlashCard({card: res});
                    $scope.newCard = angular.copy(emptyObj);
                    $scope.newCardForm.$setPristine();
                });
            };

            $scope.$on('setCurrent', function(){
                $scope.newCard  = FlashCardsFactory.getCurrentCard();
            });

            $scope.updateCard = function(){
                FlashCardsFactory.updateCard($scope.newCard).then(function(res){
                    $scope.newCard = angular.copy(emptyObj);
                    $scope.newCardForm.$setPristine();
                });
            };


        }
    };
})