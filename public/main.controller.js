app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {

    $scope.getCards = function() {
 			FlashCardsFactory.getFlashCards()
        .then(function(res) {
            $scope.flashCards = res;
        }, function(err) {
            console.log(err);
        });
    };

		$scope.getCards();

    $scope.getCategoryCards = function(category) {
    	  FlashCardsFactory.getCategoryCards(category)
        .then(function(res) {
            $scope.flashCards = res;
            $scope.currentCategory = category;
        }, function(err) {
            console.log(err);
        });
    }

    $scope.resetCategory = function() {
    	$scope.currentCategory = "";
    	$scope.getCards();
    }

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.currentCategory = "";

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
});