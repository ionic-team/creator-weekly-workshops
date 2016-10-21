// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    
    $scope.fields = {
        name: '',
        favorite_color: 'Any Color',
        favorite_pizza: 'Any Topping'
    }
    
    $scope.search = function(){
        var params = {
            name: $scope.fields.name
        }
        
        if ($scope.fields.favorite_color != 'Any Color'){
            params.favorite_color = $scope.fields.favorite_color;
        }
        
        if ($scope.fields.favorite_pizza != 'Any Topping'){
            params.favorite_pizza = $scope.fields.favorite_pizza;
        }
        
        $state.go('tabsController.results', params);
        
    }

}