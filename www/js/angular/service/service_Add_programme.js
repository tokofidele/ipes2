// dataS = {
		// message: null,
		 
	 
// };
 
//Le service de d'ajout d'un utilisateur'

ipescam.factory('service_Add_programme', function($http) {


	/*
	 * Dans cette partie on fait appel
	 * 
	 */
	return {
 
 
//		
		serverRequest : function(data_programme,$scope){
			
			 $http({
				 method: 'POST', 
				 url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_ajouter_programme.php",
	            data: data_programme
	            }).success (function(data) {
 	                $scope.result_add_programme = data.result_add_programme;       
	            });
			 
			
		},

		



	};
});







