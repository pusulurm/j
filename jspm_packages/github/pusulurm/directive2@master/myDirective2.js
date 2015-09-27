/**
 * Created by pusulurm on 9/24/2015.
 */
define(['./dirCtrl2'],function(ctr2){
    return function(){
        return {
            restrict : 'E',
            scope : true,
            templateUrl : '../templates/directive2.html',
            controller : ctr2
        }
    }
});
