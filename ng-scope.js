/**
 * ngScope
 *
 * @author Anders D. Johnson
 * @url https://github.com/adjohnson916/ng-scope
 * @license MIT
 */
(function(angular, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['angular'], function(angular) {
      return factory(angular);
    });
  } else {
    return factory(angular);
  }
}(angular || null, function(angular) {

  /**
   * @ngdoc module
   * @name ngScope
   * @description ngScope
   * @example
     <doc:example>
       <doc:source>
          <div ng-scope="{name: 'Anders', job: 'developer'}">
            <!-- whatever you want here -->
          </div>
       </doc:source>
     </doc:example>
     <doc:example>
       <doc:source>
          <script type="text/ng-template" id="template">
            Hi, my name is {{name}}, and I work as a {{job}}!
          </script>
          <div ng-scope="{name: 'Anders', job: 'developer'}" ng-include src="'template'"></div>
       </doc:source>
     </doc:example>
   */
  var app = angular.module('ngScope', []);

  /**
   * @ngdoc directive
   * @name ngScope.directive:ngScope
   * @restrict A
   *
   * @description
   * Directive that sets up an inheriting child scope and extends with evaluated value of attribute.
   */
  app.directive('ngScope', [
    function () {
      return {
        restrict: 'A', // attribute 'ng-scope'
        scope: true, // extend parent scope
        link: function (scope, element, attrs) {
          // extend the scope with the evaluated attribute
          angular.extend(scope, scope.$eval(attrs.ngScope));
        }
      };
    }
  ]);

  return app;

}));