angular.module('ambrosia').controller('MainCtrl',
['$scope', '$rootScope', '$q', 'seUsers',
 function ($scope, $rootScope, $q, seUsers)
{

    $scope.user = seUsers.users[0]

    /***

    The highlighted categories seemed to be the important ones. Uncomment to put other categories back in.

    ***/

    $scope.categories = [
      {
        name : 'Personal',
        cats : [
          'info',
          'contact',
          'location',
          'education',
        ]
      },
      {
        name : 'Experience',
        cats : [
          'employment',
        ]
      },
      {
        name : 'Talents',
        cats : [
//          'writing',
//          'reading',
//          'speaking',
          'languages',
          'skills',
        ]
      },
      {
        name : 'Accolades / Interests',
        cats : [
          'service',
          'projects',
//          'social',
//          'affiliation',
//          'interests',
//          'recognition',
//          'extracurricular',
//          'governance',
//          'disposition',
//          'service',
        ]
      },
    ]

    $scope.selected = 0

    $scope.select = function(pick){
      $scope.selected = pick
    }

    $scope.isArr = function(obj){
        return angular.isArray(obj)
    }

    $scope.isObject = function(obj) {
      return obj !== null && typeof obj === 'object'
    }

    $scope.submit = function() {
      // This only works if the window does not leave the domain
      var linky = window.open('http://askcareermuse.com','acmWindow')
      linky.info = JSON.stringify({ "before" : backup, "after" : $scope.user })
    }

    $scope.create = function(item) {
      if (this.isObject(item[0])) {
        item.push(clear(item[0]))
      } else {
        item.push("")
      }
    }

    $scope.reset = function() {
      $scope.user = copy(backup)
    }

    $scope.destroy = function(item, idx) {
      if (idx > -1 && item.length > 1) {
          item.splice(idx, 1)
      }
    }

    function init(){
      if ('info' in $scope.user && 'highlights' in $scope.user['info'] && $scope.user['info']['highlights'].length ==0){
        $scope.user['info']['highlights'].push("")
      }
      if ('education' in $scope.user && 'history' in $scope.user['education'] && $scope.user['education']['history'].length ==0){
        $scope.user['education']['history'].push({
           "institution" : "",
           "title" : "",
           "url":"",
           "start":"",
           "end":"",
           "grade":"",
           "summary":"",
           "curriculum":[]
        })
      }
      if ('employment' in $scope.user && 'history' in $scope.user['employment'] && $scope.user['employment']['history'].length ==0){
        $scope.user['employment']['history'].push({
           "employer" : "",
           "url" : "",
           "position" : "",
           "summary" : "",
           "start" : "",
           "end" : "",
           "keywords" : "",
           "highlights" : [
             ""
           ],
           "location" : ""
        })
      }
      if ('languages' in $scope.user && $scope.user['languages'].length == 0){
        $scope.user['languages'].push({
           "language" : "",
           "level" : ""
        })
      }
      if ('skills' in $scope.user && 'sets' in $scope.user['skills'] && $scope.user['skills']['sets'].length == 0){
        $scope.user['skills']['sets'].push({
           "name" : "",
           "level" : "",
           "skills" : []
        })
      }
      if ('projects' in $scope.user && $scope.user['projects'].length == 0){
        $scope.user['projects'].push({
          "title" : "",
          "category" : "",
          "role" : "",
          "url" : "",
          "start" : "",
          "end" : "",
          "repo" : "",
          "description" : "",
          "summary" : "",
          "keywords" : "",
          "media" : [
          {
            "category" : "",
            "url" : ""
          }]
        })
      }
      if ('service' in $scope.user && $scope.user['service'].isEmpty()){
        $scope.user['service'] = {
          "summary" : "",
          "history" : [
          {
            "flavor" : "",
            "position" : "",
            "organization" : "",
            "role" : "",
            "location" : "",
            "start" : "",
            "end" : "",
            "summary" : "",
            "highlights" : []
          }]
        }
      }
    }

    init()

    function copy(item) {
      return JSON.parse(JSON.stringify(item))
    }

    function clear(base) {
      var nBase = {}
      for (var key in base) {
        if (base.hasOwnProperty(key)) {
          if ($scope.isArr(base[key])) {
            if (base[key].length > 0) {
              nBase[key] = [clear(base[key][0])]
            } else {
              nBase[key] = ""
            }
          } else if ($scope.isObject(base[key])) {
            nBase[key] = clear(base[key])
          } else {
            nBase[key] = ""
          }
        }
      }
      return nBase
    }

    var backup = copy($scope.user)


}])