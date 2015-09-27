/**
 * Created by pusulurm on 9/24/2015.
 */
define(['./dirCtrl1'],function(ctrl){
    return function(){
        return {
            restrict : 'E',
            scope : true,
            templateUrl : '../templates/directive1.html',
            controller : ctrl
        }
    }
});
