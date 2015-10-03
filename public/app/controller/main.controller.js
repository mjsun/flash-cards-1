app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
    $scope.loading = true;

    $scope.getCards = function() {
        FlashCardsFactory.getFlashCards()
        .then(function(res) {
            $scope.flashCards = res;
           $scope.loading = false;
        }, function(err) {
            console.log(err);
                $scope.loading = false;
        });
    };

    $scope.getCards();

    $scope.resetCategory = function() {
    	$scope.currentCategory = "";
    	$scope.getCards();
    };

    $scope.currentCategory = "Show All";

    $scope.addFlashCard = function(card){
        $scope.flashCards.unshift(card);
    };

    $scope.deleteFlashCard = function(card){
       for(var i=0; i<$scope.flashCards.length; i++){
           if($scope.flashCards[i]._id === card._id){
               $scope.flashCards.splice(i,1);
           }
       }
    };

});