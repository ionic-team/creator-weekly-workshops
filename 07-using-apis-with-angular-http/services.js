angular.module('app.services', [])

.service('Survey', ['$http', function($http){

    var api_url = 'YOUR_SHEETSU_URL';
    var currentID = 1;

    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                return resp.data;
            });
            
        }, 
        add: function(data){
            currentID++;
            data.id = currentID;
            
            return $http.post(api_url, data).then(function(resp){
                return resp.data;
            });

        }
    }
    
    ret.all();
    
    return ret;

}]);
