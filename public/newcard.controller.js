app.controller('NewCardController', function($scope, $http){
    $scope.newCard = {
        question: null,
        category: null,
        answers: [
            { text: null, correct: false },
            { text: null, correct: false },
            { text: null, correct: false }
        ]
    };
    $scope.submitForm = function(){
        $http.post('/card', $scope.newCard);
    }
});