app.controller('FlashCardController', function($scope, FlashCardsFactory, card) {

 	$scope.flashCard = card

	$scope.updateCard = function(card) {
		FlashCardsFactory.updateCard(card).then(function(){})
	}
})