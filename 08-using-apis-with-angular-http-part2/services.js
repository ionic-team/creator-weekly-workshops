angular.module('app.services', [])

.service('Survey', ['$http', function($http){
    
    var api_url = 'YOUR_SHEETSU_URL';
    var currentID = 1;
    
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.id != '';
        });
    }
    
    var ret = {
        all: function(){
            
            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                if (results.length > 0) currentID = parseInt(results[results.length-1].id);
                return results;
            });
            
        }, 
        add: function(data){
            currentID++;
            data.id = currentID;
            
            return $http.post(api_url, data).then(function(resp){
                return resp.data;
            });

        },
        delete: function(id){
            return $http.delete(api_url+'/id/'+id);
        },
        query: function(params){
            
            var actual_params = [];
            for (var k in params){
                if (params[k]){
                    actual_params.push(k + '=' + params[k]);
                }
            }
            actual_params = '?'+actual_params.join('&');
            
            return $http.get(api_url+'/search'+actual_params).then(function(resp){
                return filterBlankRows(resp.data);
            })
            
        }
    }
    
    ret.all();
    
    return ret;

}]);