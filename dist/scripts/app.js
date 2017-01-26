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
    
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])                  
        .config(config);                                                                                      
                                                                                                                   
})();  


/** 
* Main modules blocChat that will hold services, controllers,
* and configure the states to corresponding templates
*/
