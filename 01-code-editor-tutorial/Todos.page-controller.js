// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Todos, $ionicModal) {
    
    $scope.items = Todos.items;
    
    $scope.data = {
        'title': ''
    }
    
    $scope.modal = $ionicModal.fromTemplate("<ion-modal-view>" +
    "<ion-header-bar class='bar-balanced'>" +
      "<h1 class='title'>Add a Todo</h1>" +
      '<button class="button button-clear" ng-click="closeModal()">Close</button>' +
    "</ion-header-bar>" +
    "<ion-content class='padding'>" +
      "<label class='item item-input'><input type='text' placeholder='Title' ng-model='data.title' /></label>" +
      "<button ng-click='addItem()' class='button button-balanced button-block'>Submit</button>" +
    "</ion-content>" +
  "</ion-modal-view>", {
        scope: $scope,
        animation: 'slide-in-up'
    })
    
    $scope.showModal = function(){
        $scope.modal.show();
    }
    
    $scope.closeModal = function(){
        $scope.data.title = '';
        $scope.modal.hide();
    }
    
    $scope.addItem = function(){
        Todos.addItem($scope.data.title);
        $scope.closeModal();   
    }

}