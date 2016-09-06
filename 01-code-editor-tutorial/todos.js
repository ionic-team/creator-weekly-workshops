angular.module('todos', ['firebase'])

.run(function(){
    
    // Initialize Firebase
      var config = {
        apiKey: "<YOUR_API_KEY>",
        authDomain: "<YOUR_AUTH_DOMAIN>",
        databaseURL: "<YOUR_DATBASE_URL>",
        storageBucket: "<YOUR_STORAGE_BUCKET>",
      };
      firebase.initializeApp(config);
    
})

.service('Todos', ['$firebaseArray', function($firebaseArray){
    
    var ref = firebase.database().ref().child('todos');
    var items = $firebaseArray(ref);
    
    var todos = {
        'items': items,
        addItem: function(title){
            items.$add({
                'title': title,
                'finished': false
            });
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    
    return todos;

}]);