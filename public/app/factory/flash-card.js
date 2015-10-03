app.factory('FlashCardsFactory', function ($http) {

    var currentCard = null;
    function setCurrentCard(card){
        currentCard = card;
    }

    function getCurrentCard(){
        return currentCard;
    }

    function getFlashCards(){
        return $http.get('/cards').then(function (response) {
            return response.data;
        });
    }

    function getCategoryCards(){
        return $http.get('/cards?category=' + category).then(function (response) {
            return response.data;
        });
    }

    function addCard(card){
        return $http.post('/card', card).then(function(res){
            currentCard = res.data;
            return res.data;
        });
    }

    function removeCard(card){
        return $http.delete('/card/'+card._id).then(function(res){
            currentCard = null;
            return res.data;
        });
    }

    function updateCard(card){
        return $http.put('/card', card).then(function(res){
            return res.data;
        });
    }
    return {
        setCurrentCard: setCurrentCard,
        getCurrentCard: getCurrentCard,
        getFlashCards: getFlashCards,
        getCategoryCards: getCategoryCards,
        addCard: addCard,
        removeCard: removeCard,
        updateCard: updateCard
    };
});