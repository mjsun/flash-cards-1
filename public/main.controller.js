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

    $scope.getCategoryCards = function(category) {
    	 // FlashCardsFactory.getCategoryCards(category)
        //.then(function(res) {
        //    $scope.flashCards = res;
        //    $scope.currentCategory = category;
        //}, function(err) {
        //    console.log(err);
        //});
        $scope.currentCategory = category;
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

});