angular.module('app.services', [])

.service('Survey', ['$q', '$http', function($q, $http){
    
    var api_url = 'YOUR_SHEETSU_URL';
    var currentID = 1;
    
    var ret = {
        all: function(){
            var deferred = $q.defer();
            
            $http.get(api_url).then(function(resp){
                if (resp.data.length > 0) currentID = parseInt(resp.data[resp.data.length-1].id);
                deferred.resolve(resp.data);
            });
            
            return deferred.promise;
        },
        add: function(data){
            var deferred = $q.defer();
            
            currentID++;
            data.id = currentID;
            
            $http.post(api_url+'/column/val', data).then(function(resp){
                deferred.resolve(resp.data); 
            });
            
            return deferred.promise;
        }
    }
    
    ret.all();
    
    return ret;

}]);