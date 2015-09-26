var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function ($http) {
    return {
        getFlashCards: function () {
            return $http.get('/cards').then(function (response) {
                return response.data;
            });
        },

        getCategoryCards: function(category) {
            return $http.get('/cards?category=' + category).then(function (response) {
                return response.data;
            });
        }
    };
});

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
