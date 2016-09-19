// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if ($ionicAuth.isAuthenticated()) {
        $state.go('menu.home'); 
    }
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
            $state.go('menu.home');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}