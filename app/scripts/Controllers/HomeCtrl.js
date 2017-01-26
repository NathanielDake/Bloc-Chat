(function() {
    

    function HomeCtrl(Room, $uibModal){  
        
        /**
        * variable associated with HomeCtrl, set to be
        * equal to the Room service all property (which 
        * is an array of room objects)
        */
        this.chatRooms = Room.getRooms().all;
                                   
        var vm = this;
        
        vm.roomService = Room;
        
        /*
        * method of HomeCtrl used to open the modal 
        */
        this.openModal = function() {
            
            var modalInstance = $uibModal.open({ 
                //template url correspond to modal to be opened
                templateUrl: '/templates/modal.html',
                
                //controller for modal 
                controller: function($scope, $uibModalInstance) {
                    $scope.newRoom = {$value: ''};
                    
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
        .controller('HomeCtrl', ['Room','$uibModal', HomeCtrl]);     
})();                                                                       

/**
* This controller has the service Room injected as a dependency
*/