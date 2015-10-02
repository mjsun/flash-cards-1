app.directive('newCard', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directive/new-card/new-card.html',
        scope: {
            addFlashCard:'&'
        },
        controller: function($scope, $http){
            var reset = function(){
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
            reset();
            console.log($scope);
            $scope.submitForm = function(){
                $http.post('/card', $scope.newCard).then(function(res){
                    $scope.addFlashCard({card: res.data});
                    reset();
                });
            };
        }
    };
})