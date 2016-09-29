// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $firebaseArray, $ionicUser) {
    
    $scope.data = {
        'message': ''
    }
    
      var ref = firebase.database().ref().child("messages");
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.data.message,
          email: $ionicUser.details.email,
          name: $ionicUser.details.name
        });
        $scope.data.message = '';
      };

}