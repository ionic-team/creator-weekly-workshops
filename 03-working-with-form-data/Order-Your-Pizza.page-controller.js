// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

    $scope.sizes = [
        {
            'id': 'small',
            'label': 'Small'
        },
        {
            'id': 'medium',
            'label': 'Medium'
        },
        {
            'id': 'large',
            'label': 'Large'
        }
    ];
    
    $scope.data = {
        'size': $scope.sizes[0].id,
        'extracheese': false,
        'topping': 'pepperoni',
        'note': ''
    }
    
    $scope.order = function(){
        
        $state.go('orderConfirmation', $scope.data);
        
        // console.log("Order a "+ $scope.data.size+" pizza with the topping "+$scope.data.topping);
    }

}