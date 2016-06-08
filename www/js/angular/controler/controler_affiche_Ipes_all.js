
ipescam.controller('controler_affiche_Ipes_all', ['$scope', 'service_Liste_Ipes', '$timeout', function($scope, service_Liste_Ipes, $timeout)

    {

       

        $scope.loader = {
            loading: false,
        };

         $scope.loader.loading = true;
         var post_data = 'ipes_all'
        var promise = service_Liste_Ipes.serverRequest1(post_data,$scope);



        // Simulate loading data
        $timeout(function() {

            promise.then(function()
            {
                $scope.loader.loading = true;
                $scope.data_Ipes_all = service_Liste_Ipes.getData_all($scope);

            }).then(function()
            {
                $scope.item = $scope.data_Ipes_all[0];
            });


        }, 0);



    }]).controller('controler_lire_annonce', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
    {
        $scope.loader = {
            loading: false,
        };


        $scope.name_region = function(path)
        {
            $scope.loader.loading = true;
            var promise = service_Liste_Ipes.serverRequest2(path,$scope);
            promise.then(function()
            {
                $scope.loader.loading = true;
                $scope.data_annonce_ipes = service_Liste_Ipes.getData_ipes_annonce($scope);
            });
        }



    }]).controller('liste_name_region', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
    {
        $scope.loader = {
            loading: false,
        };
        $scope.loader.loading = true;
        $scope.data_name_region = service_Liste_Ipes.getData_name_region($scope);

    }]).controller('gestion_recherche', ['$scope', 'service_gestion_ipes','service_Liste_Ipes', function($scope, service_gestion_ipes,service_Liste_Ipes)

    {


        $scope.loader = {
            loading: false,
        };
 // recherche etablissement
        $scope.RechercheEtab = function()
        {
            $scope.loader.loading = true;
 
            // recupere la liste de tous les établissements
            var promise = service_gestion_ipes.serverRequest21($scope);

            promise.then(function()
            {
                window.loggedIn = 'recherche_etablissements';
            });


        }
        
         // recherche doplome

        $scope.RechercheDiplome = function()
        {
            $scope.loader.loading = true;
 
            // recupere la liste de tous les diplome
            var promise = service_gestion_ipes.serverRequest22($scope);

            promise.then(function()
            {
                window.loggedIn = 'recherche_diplome';
            });


        }
        
                 // recherche filiere

        $scope.RechercheFiliere = function()
        {
            $scope.loader.loading = true;
 
            // recupere la liste de tous les filièere
            var promise = service_gestion_ipes.serverRequest24($scope);

            promise.then(function()
            {
                window.loggedIn = 'recherche_filiere';
            });


        }
        
        
        
         // recherche IPES

       $scope.RechercheIpes = function()
        {
            $scope.loader.loading = true;
 
           var post_data = 'ipes_all'
        var promise = service_Liste_Ipes.serverRequest1(post_data,$scope);

            promise.then(function()
            {
                window.loggedIn = 'recherhce';
            });


        }
        

    }]).controller('liste_all_etab', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        $scope.loader = {
            loading: false,
        };
            $scope.loader.loading = true;
           $scope.all_data_etab=service_gestion_ipes.get_all_etablissements($scope);
 
         
        $scope.go_id_etab = function(id_etab, labelle_etab)
        {
            $scope.loader.loading = true;
            //met le labelle etablissement dans le tableau en service et on le recupoer dans la page etablissement sans acces a la bd
            service_gestion_ipes.serverRequest12(labelle_etab, $scope);


            // recupere le champs presentation d'un etablissement
            var promise = service_gestion_ipes.serverRequest13(id_etab, $scope);

            promise.then(function()
            {
                window.loggedIn = 'presentation_recherche_etab';
            });

        }
           
  


    }]).controller('liste_all_diplome', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        $scope.loader = {
            loading: false,
        };
            $scope.loader.loading = true;
           $scope.all_data_diplome=service_gestion_ipes.get_all_diplome($scope);
 
      
    }]).controller('liste_all_filiere', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        $scope.loader = {
            loading: false,
        };
            $scope.loader.loading = true;
           $scope.all_data_filiere=service_gestion_ipes.get_all_filiere($scope);
 
      
    }]).controller('liste_all_ipes', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)

    {


        $scope.loader = {
            loading: false,
        };
           $scope.loader.loading = true;
                $scope.data_Ipes_all = service_Liste_Ipes.getData_all($scope);



    }]);