angular.module('app',['ngResource','ui.router']).controller('ss', ['$scope', '$resource', function($scope, $resource) {

	 $scope.userListt=[];
	 $scope.sh=function(){
		 $resource('http://localhost:8080/api/getRegister').query(function(result) {
			   $scope.userListt=result;
			  });
		 }
	 $scope.sh();
 $scope.save = function(n,s,m,d) {
	 
   $resource('http://localhost:8080/api/reg/'+n+'/'+s+'/'+m+'/'+d+'').query(function(data) {
	   $scope.sh();
   return data
  });
   }
 
 
 
 $scope.edit=function(id,fname,lname,email,password){
	 $scope.id=id;
	 $scope.Fname=fname;
	 $scope.Lname=lname;
	 $scope.email=email;
	 $scope.password=password;
//	   $resource('http://localhost:8080/api/get/'+id+'').query(function(result) {
//		   alert(result)
//	      $scope.userReg=result;
//	      alert($scope.userReg)
//	  }); 
 };
 
 $scope.deletee=function(id){
	   $resource('http://localhost:8080/api/delete/'+id+'').query(function(data) {
		   $scope.sh();
	   return data
	  }); 
 };
 $scope.update=function(id,n,s,m,d){
	  $resource('http://localhost:8080/api/update/'+id+'/'+n+'/'+s+'/'+m+'/'+d+'').query(function(data) {
	   $scope.sh();
   return data
  });
//	 $resource('http://localhost:8080/api/update/'+id+'').query(function(data) {
//		   $scope.sh();
//	  });
 }
 
}]);