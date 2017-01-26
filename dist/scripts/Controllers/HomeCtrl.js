(function() {
    

    function HomeCtrl(Room) {  
        
        /**
        * variable associated with HomeCtrl, set to be
        * equal to the Room service all property (which 
        * is an array of room objects)
        */
        this.chatRooms = Room.all;
                                   
        
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);     
})();                                                                       

/**
* This controller has the service Room injected as a dependency
*/