console.log('js sourced');

var myApp = angular.module('myApp', ['ngRoute']);
  // myApp.config(function ($mdThemingProvider,pickerProvider) {
  //       pickerProvider.setOkLabel('Save');
  //       pickerProvider.setCancelLabel('Close');
  //       //  Over ride day names by changing here
  //       pickerProvider.setDayHeader('single');  //Options 'single','shortName', 'fullName'
  //   }
  /// Routes ///
  myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'NewTripController as ntc',
    })
    .otherwise({
      redirectTo: 'home'
    });
  });
