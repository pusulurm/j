/**
 * Created by pusulurm on 9/24/2015.
 */
define(['./myDirective1','./_directive1_template_cache'],function( directive1){
    angular.module('Directive1Module', ['directive1.templates']).
        directive('myDirective1', directive1)
});
