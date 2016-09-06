// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Todos) {

    // $scope.itemid = $stateParams.item;
    
    $scope.item = Todos.items[Todos.items.$indexFor($stateParams.item)];
    
    $scope.toggleFinished = function(){
        if ($scope.item.finished){
            Todos.setFinished($scope.item, false);
        }else{
            Todos.setFinished($scope.item, true);
        }
    }

}