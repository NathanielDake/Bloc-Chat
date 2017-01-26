(function () {
    function Room($firsbaseArray) {
        
        var Room = {
         
        };
        
        /** reference to Firebase database 'rooms' (that holds rooms 1, 2, 3)
        * The child() method retrieves the children of 'rooms' (Room 1,
        * Room 2, Room 3)  
        */
        var ref = firebase.database().ref().child("rooms");  
        
        /** $firebaseArray service is used to make sure that data is returned as 
        * an array
        */
        var rooms = $firsbaseArray(ref);
        
        
        /**
        * this will return an object with the property 'all',
        * that when called in home.html template will correspond 
        * to 'rooms', and array of firebase room objects
        */
        return {
            all: rooms  
        };
    }

    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
    
})();

/**
* This Room factory defines all Room-related API queries.
* $firebaseArray service has been injected (provided by 
* AngularFire)
*/