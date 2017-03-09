/*! Angular application initialization */

var modules = [
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'angular-loading-bar',
  'ui.bootstrap',
  'ngFlash',
  'ngMdIcons',
  'ngSanitize'
]

var role = {
    'all' : 0,
    'user' : 1,
    'admin' : 2,
    'super' : 3,
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

Object.prototype.isEmpty = function() {
    for (var prop in this) if (this.hasOwnProperty(prop)) return false;
    return true;
};

var app = angular.module('ambrosia', modules)

app.config(
['$locationProvider', '$stateProvider', '$urlRouterProvider',
function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider.state('home', {
    url: "/",
    templateUrl: "/assets/html/home/main.html",
    controller: "MainCtrl",
  })

  $locationProvider.html5Mode(true)
}])

app.run(
['$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    console.log("state", toState, toParams, fromState, fromParams)

    $rootScope.toState = toState
    $rootScope.toStateParams = toParams

  })
}])

app.config(['$mdThemingProvider',
function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('deep-orange')
    .backgroundPalette('grey', {
      'default': '50',
      'hue-1': '100',
      'hue-2': '100',
      'hue-3': '200'
    })
}]);
