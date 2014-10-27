angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

 .factory('popupAlert', ['$ionicPopup', function($ionicPopup){
  return {
    show: function(title, alertMsg) {
      var alertPopup = $ionicPopup.alert({
              title: title,
              template: "<p class='center-align'>"+alertMsg+"</p>"
          });
          alertPopup.then(function(res) { });
    }
  };
}])
 
.factory('Suppliers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var suppliers = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return suppliers;
    },
    get: function(friendId) {
      // Simple index lookup
      return suppliers[supplierId];
    }
  }
});
