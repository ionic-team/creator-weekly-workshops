// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_color || $scope.params.favorite_pizza){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
    $scope.showDelete = false;
    $scope.toggleDelete = function(){
        $scope.showDelete = !$scope.showDelete;
    }
    
    $scope.deleteItem = function($index){
        Survey.delete($scope.surveys[$index].id).then(function(){
            $scope.surveys.splice($index-1, 1);
        })
    }

}