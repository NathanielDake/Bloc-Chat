(function() {
    

    function HomeCtrl(Room, Message, $uibModal){  
        
        //shorthand for this ($scope variable for home controller)
        var vm = this;
        
        /**
        * variable associated with HomeCtrl, set to be
        * equal to the Room service all property (which 
        * is an array of room objects)
        */
        vm.chatRooms = Room.getRooms().all;
         
        //variable of home controller, used to hold current chatroom 
        vm.currentRoom = null;
        
        //boolean variable used to decide whether room title name is shown or not
        vm.currentRoomVisible = false;
        
        //variable used to hold the room service
        vm.roomService = Room;
        
        vm.sendMessage = function() {
            Message.send(vm.newMessage, vm.currentRoom.$id);
            vm.newMessage = '';
        };
        
        //function that sets the current chatroom to the name clicked
        vm.setCurrentChatRoom = function(clickedRoom) {
            vm.currentRoom = clickedRoom;  
            vm.messages = Room.getMessages(vm.currentRoom.$id);
        };
        
        /*
        * method of HomeCtrl used to open the modal 
        */
        vm.openModal = function() {
            
            var modalInstance = $uibModal.open({ 
                //template url correspond to modal to be opened
                templateUrl: '/templates/modal.html',
                
                //controller for modal 
                controller: function($scope, $uibModalInstance) {
                    $scope.newRoom = {name: ''};
                    
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                    
                    $scope.create = function() {
                        $uibModalInstance.close($scope.newRoom);
                    };
                },
                size: 'md',
            });
            
            modalInstance.result.then(function(data) {
                vm.roomService.addRoom(data);    
            });
            
        };

    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal', HomeCtrl]);     
})();                                                                       

/**
* This controller has the service Room injected as a dependency
*/