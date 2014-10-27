angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('SuppliersCtrl', function($scope, Suppliers) {
  $scope.suppliers = Suppliers.all();
})

.controller('SupplierDetailCtrl', function($scope, $stateParams, Suppliers) {
  $scope.supplier = Suppliers.get($stateParams.supplierId);
})

.controller('stocklocationCtrl', function($scope,$http,$ionicPopup,popupAlert) {  
	$http.get("data/location.json")
    .success(function(data) {
        $scope.baseData=data;      
    })
    $scope.search={};
    $scope.search.location="";
    $scope.submitFilter = function() {
      if($scope.search.location=="")
      {
         $scope.showStock=false;
         popupAlert.show('Alert', "Please Select Location");
         return;
      }
      $scope.showStock=true;
      console.log($scope.search.location);
    $http.get("data/stock.json")
    .success(function(data) {
       $scope.allstock = data.stocks;      
    })
    }	
});