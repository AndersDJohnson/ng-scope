/**
 * ngScope
 *
 * @author Anders D. Johnson
 * @url https://github.com/AndersDJohnson/ng-scope
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
}(window.angular || null, function(angular) {

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
   * Directive that sets up an inheriting child scope,
   *  and extends with evaluated value of attribute,
   *  as well as subcribing to updates on that expression.
   */
  app.directive('ngScope', [
    function () {
      return {
        restrict: 'A', // attribute 'ng-scope'
        scope: true, // extend parent scope
        link: function (scope, element, attrs) {
          // get the expression from the attribute
          var expression = attrs.ngScope;
          // evaulate the attribute
          var evaluated = scope.$eval(expression);
          // extend scope with evaluated expression
          angular.extend(scope, evaluated);
          // watch for changes on the expression
          scope.$watch(expression, function (newValue, oldValue, scope) {
            // update extending scope with the new value of the expression
            angular.extend(scope, newValue);
          });
        }
      };
    }
  ]);

  return app;

}));
