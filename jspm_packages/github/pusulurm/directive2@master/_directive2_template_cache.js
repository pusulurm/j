angular.module('directive2.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("../templates/directive2.html",
    "<hr><h2>Directive 2</h2><div>{{message2}}</div><div><label translate=DIRECTIVE2.KEY1></label></div><div><label translate=DIRECTIVE2.KEY2></label></div><div><label translate=DIRECTIVE2.KEY3></label></div><hr>");
}]);
