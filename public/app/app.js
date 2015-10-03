var app = angular.module('flashCards', ['ngAnimate', 'ui.bootstrap']);



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