angular.module('directive1.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../templates/directive1.html",
    "<hr><h2>Directive 1</h2><div>{{message1}}</div><div><label translate=DIRECTIVE1.KEY1></label></div><div><label translate=DIRECTIVE1.KEY2></label></div><hr>");
}]);
