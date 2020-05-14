(function() {
'use strict';

angular.module("myApp",[])
.controller('myController',myController);

function myController($scope){
	$scope.checkFood=function(){
		
		var temp=$scope.text1.split(',').length;
		if(temp<=3){
			$scope.message="Enjoy!";
		}else{
			$scope.message="Too Much!";
		}
		
	};
}

})();