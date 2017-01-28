(function () {
    
    function config($stateProvider, $locationProvider) {
        
        $locationProvider                                   
            .html5Mode({                                    
                enabled: true,
                requireBase: false
        });
        
        $stateProvider                                      
            .state('home', {                             
                url:'/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
                });                                            
    }
    
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/username_modal.html',

                controller: function($scope, $uibModalInstance) {
                    $scope.newUsername =  "Guest " + Math.floor(Math.random() * (100 - 1)) + 1;

                    $scope.create = function() {
                        if ($scope.newUsername != ''){
                            $uibModalInstance.close($scope.newUsername);
                        } else {
                            alert('Enter a username of at least 1 character');
                        } 
                    };
                },
                size: 'md'
            });
            
            modalInstance.result.then(function(data) {
                $cookies.put('blocChatCurrentUser', data);  
            });
                                      
                                      
                
        }
    };
    
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])     
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
                                                                                                                   
})();  


/** 
* Main modules blocChat that will hold services, controllers,
* and configure the states to corresponding templates
*/
