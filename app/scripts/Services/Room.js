(function () {
    function Room($firebaseArray) {
        
        var firebaseRef = firebase.database().ref();
        /* reference to Firebase database 'rooms' (that holds rooms 1, 2, 3)
        * The child() method retrieves the children of 'rooms' (Room 1,
        * Room 2, Room 3)  
        */
        var ref = firebase.database().ref().child("rooms"); 
        
        
        /* $firebaseArray service is used to make sure that data is returned as 
        * an array
        */
        var roomsRef = $firebaseArray(ref);
        
        /*
        * object holding getRooms and addRoom function
        */
        var rooms = {
            getRooms: getRooms,
            addRoom: addRoom,
            getMessages: getMessages
        };
        
        return rooms;
        
        /*
        * @function getRooms
        * @gets all rooms from firebase array in database 
        */
        function getRooms() {
            return {
                all: roomsRef
            }
        };
        
        /*
        * @function addRoom
        * @adds a room to firebase array in database 
        * @param string
        */
        function addRoom(name) {
            roomsRef.$add(name);
        };
        
        //function used to get messages
        function getMessages(roomId) {
            return $firebaseArray(firebaseRef.child("messages").orderByChild("roomId").equalTo(roomId));  
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