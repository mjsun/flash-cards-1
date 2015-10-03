var app = angular.module('flashCards', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(function($stateProvider) {
    $stateProvider
    .state('home', {
        url: '',
        templateUrl: '/app/templates/home.html',
        controller: "MainController"
    })
    .state('home1', {
        url: '/',
        templateUrl: '/app/templates/home.html',
        controller: "MainController"
    })
    .state('flashcards', {
        url: '/flashcards',
        templateUrl: '/app/templates/flashCards.html',
        controller: "MainController"
    })
    .state('flashcard', {
        url: '/flashcard/:card_id',
        templateUrl: '/app/templates/flashCard.html',
        controller: 'FlashCardController',
        resolve: {
            card: function($stateParams, FlashCardsFactory) {
                return FlashCardsFactory.getById($stateParams.card_id)
            }
        }
    })
    .state('flashcard.delete', {
        url: '/delete',
        templateUrl: '/app/templates/deleteFlashCard.html',
        controller: function($scope, FlashCardsFactory, $state){
            console.log(FlashCardsFactory);
            $scope.removeCurrent = function(card){
                FlashCardsFactory.removeCard(card).then(function(res){
                    $state.go('flashcards');
                });
            };
        }
    })
    .state('edit', {
        url: '/flashcard/:card_id/edit',
        templateUrl: '/app/templates/editFlashCard.html',
        resolve: {
            card: function($stateParams, FlashCardsFactory) {
                return FlashCardsFactory.getById($stateParams.card_id)
            }
        },
        controller: function($scope, card, FlashCardsFactory, $state) {
            $scope.flashCard = card;
            $scope.updateCard = function(card){
                FlashCardsFactory.updateCard(card).then(function(data){
                    // $scope.newCardForm.$setPristine();
                    $state.go('flashcard', { card_id: data._id});
                });
            };
        }
    })
    .state('addcard', {
        url: '/addcard',
        templateUrl: '/app/templates/addFlashCard.html',
        controller: function($scope, FlashCardsFactory, $state){
            $scope.newCard = undefined;
            $scope.addFlashCard = function(card){
                FlashCardsFactory.addCard(card).then(function(res){
                    $state.go('flashcard', { card_id: res._id});
                });
            };
        }
    });

})




app.factory('ScoreFactory', function () {

    return {
        setCorrect: function() {
            this.correct++;
        },
        setIncorrect: function() {
            this.incorrect++;
        },
        correct: 0,
        incorrect: 0
    };
});


app.filter('getCategory', function(){
    return function(input, category){
        if(category){
            return input.filter(function(card){
                return card.category === category;
            });
        }
        return input;
    };
});