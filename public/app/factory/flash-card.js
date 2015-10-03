app.factory('FlashCardsFactory', function ($http) {

    var currentCard = null;
    function setCurrentCard(card){
        currentCard = card;
    }

    function getCurrentCard(){
        return currentCard;
    }

    function getFlashCards(){
        var self = this;
        return $http.get('/cards').then(function (response) {
            self.flashcards = response.data;
            return response.data;
        });
    }

    function getCategoryCards(){
        return $http.get('/cards?category=' + category).then(function (response) {
            return response.data;
        });
    }

    function addCard(card){
        var self = this;
        return $http.post('/card', card).then(function(res){
            self.flashcards.push(res.data);
            currentCard = res.data;
            return res.data;
        });
    }

    function removeCard(card){
        var self = this;
        return $http.delete('/card/'+card._id).then(function(res){
            _removeFromArray(self.flashcards, card);
            currentCard = null;
            return res.data;
        });
    }

    function _removeFromArray(arr, item) {
        return arr.filter(function(e) {
            return e._id !== item._id;
        });
    }

    function updateCard(card){
        var self = this;
        return $http.put('/card', card).then(function(res){
            _removeFromArray(self.flashcards, res.data);
            self.flashcards.push(res.data);
            return res.data;
        });
    }

    function getById(id) {
        return $http.get('/card/' + id)
            .then(function(res) {
                return res.data
            })

    }

    return {
        setCurrentCard: setCurrentCard,
        getCurrentCard: getCurrentCard,
        getFlashCards: getFlashCards,
        getCategoryCards: getCategoryCards,
        addCard: addCard,
        removeCard: removeCard,
        updateCard: updateCard,
        flashcards: [],
        getById: getById
    };
});