angular.module('ambrosia').directive('diCollapse', ['$rootScope', function ($rootScope) {
    return {
     restrict: 'AE',
     templateUrl: '/assets/html/partials/di-collapse.ng.html',
     scope: {
       cards: '=diCollapseCards'
     },
     link: function (scope, element, attrs) {

      /***

      The categories for the resume positions. Name should be at the top out of the collapse

      'name'

      ***/

      scope.categories = [
        {
          name : 'Personal',
          cats : [
            'info',
            'contact',
            'location',
          ]
        },
        {
          name : 'Experience',
          cats : [
            'employment',
          ]
        },
        {
          name : 'Skills',
          cats : [
            'writing',
            'reading',
            'speaking',
            'languages',
            'skills',
          ]
        },
        {
          name : 'Accolades / Interests',
          cats : [
            'projects',
            'social',
            'affiliation',
            'interests',
            'recognition',
            'extracurricular',
            'governance',
            'disposition',
            'service',
          ]
        },
      ]

      console.log(scope)
      console.log(element)
      console.log(attrs)
     }
   }
}])