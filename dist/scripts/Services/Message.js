(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child("messages");
        var messageRef = $firebaseArray(ref);
        
        var date = new Date();
        
        
        return {            
            send: function(newMessage, roomId) {
                var message = {
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: timeFormat(),
                    roomId: roomId
                }   
                messageRef.$add(message);
            }
        };
        
        function timeFormat() {
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			var dayNight = "AM";

			if (h > 12) {
				h -= 12;
				dayNight = "PM";
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			return h + ":" + m + " " + dayNight;
		}
    }
    
   
    angular
        .module('blocChat') 
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
    
    
})();