define(['angular123', 'directive1', 'directive2','angular-translate','angular-translate/dist/angular-translate-loader-partial/angular-translate-loader-partial'],function(angular){
	angular.module('mainModule',['pascalprecht.translate', 'Directive1Module', 'Directive2Module'])
		.config(['$translateProvider','$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider){
			$translateProvider.useLoader('$translatePartialLoader', {
				urlTemplate: 'dist/{part}/i18n/{lang}.json'
			});
			$translateProvider.preferredLanguage('en_CA');
			$translatePartialLoaderProvider.addPart('main');
			$translatePartialLoaderProvider.addPart('directive1');
			$translatePartialLoaderProvider.addPart('directive2');
		}])
		.controller('mainController', ['$scope', function($scope){
			$scope.message = "Message from controller...!";
		}]);
});