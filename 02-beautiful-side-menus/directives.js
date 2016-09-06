angular.module('app.directives', [])

.directive('activePageHighlight', ['$rootScope', '$state', function($rootScope, $state){

   return function ($scope, $element, $attr) {
       
     function checkUISref(){
       if ($state.is($attr['uiSref'])){
             $element.addClass('active-page-highlight');
         } else {
             $element.removeClass('active-page-highlight');
         }
     }
     
     checkUISref();
       
     $rootScope.$on('$stateChangeSuccess', function(){
         checkUISref();
     })
   };

}]);