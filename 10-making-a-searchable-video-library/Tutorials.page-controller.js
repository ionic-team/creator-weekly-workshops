// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
  $scope.narrowed_tutorials = Tutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_tutorials = Tutorials.list;
          return;
      }
      
      $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
        if (tutorial.name.toLowerCase().indexOf(s) > -1 || tutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}