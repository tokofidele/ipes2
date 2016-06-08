
ipescam.controller('get_Ipes_region', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)

    {
        $scope.loader = {
            loading: false,
        };

        $scope.nom_region = function(path)
        {
            $scope.loader.loading = true;
            var promise = service_Liste_Ipes.serverRequest(path, $scope);

            promise.then(function()
            {
                window.loggedIn = 'liste_ipes_region';

            });
        }

    }]).controller('head_nom_region_liste_ipes', ['$scope', 'service_Liste_Ipes', function($scope, service_Liste_Ipes)
            //nom des region dans le template head de la liste des ipes et renvois au template precedent sur le clic
            {
                $scope.loader = {
                    loading: false,
                };

                $scope.loader.loading = true;
                $scope.name_region = service_Liste_Ipes.getData_region_name($scope);

                // retourne a la liste des Region
                $scope.region = function()
                {
                    window.loggedIn = 'region';
                }

            }]).controller('affiche_ipes_region', ['$scope', 'service_Liste_Ipes', 'service_gestion_ipes', function($scope, service_Liste_Ipes, service_gestion_ipes)

    {

        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.data_Ipes = service_Liste_Ipes.getData($scope); // affiche la liste des ipes par region choisie et gere le click sur l'ipes choisie
        $scope.name_region = service_Liste_Ipes.getData_region_name($scope);  //recupere le nom de la  region cliquée


        // recupere l'id de l'ipes choisie et appelle le template correspondant coté region/ ipes
        $scope.go_id_ipes = function(path)
        {


            $scope.loader.loading = true;

            //recupere le nom de la region de ipes clique a base de id ainsi que le champs presentation de l'ipes
            var promise = service_gestion_ipes.serverRequest6(path, $scope);
            $scope.loader.loading = true;

            promise.then(function()
            {

                $scope.loader.loading = true;
                $scope.region_presentation_ipes = service_gestion_ipes.getData_region_presentation_ipes($scope);
                var region = {};


                for (var i = 0; i < $scope.region_presentation_ipes.length; i++) {
                    var obj = $scope.region_presentation_ipes[i];

                    for (var key in obj) {
                        if (key == 'region_ipes')
                        {
//                             alert(obj[key]);
                            region.region_ipes = obj[key];

                            if (region.region_ipes === 'Centre')
                                window.loggedIn = 'ipes_centre';
                            else
                            if (region.region_ipes === 'Adamaoua')
                                window.loggedIn = 'ipes_Adamaoua';
                            else
                            if (region.region_ipes === 'Est')
                                window.loggedIn = 'ipes_Est';
                            else
                            if (region.region_ipes === 'Extreme-Nord')
                                window.loggedIn = 'ipes_Extreme_Nord';
                            else
                            if (region.region_ipes === 'Littoral')
                                window.loggedIn = 'ipes_Littoral';
                            else
                            if (region.region_ipes === 'Nord')
                                window.loggedIn = 'ipes_Nord';
                            else
                            if (region.region_ipes === 'Nord-Ouest')
                                window.loggedIn = 'ipes_Nord_Ouest';
                            else
                            if (region.region_ipes === 'Ouest')
                                window.loggedIn = 'ipes_Ouest';
                            else
                            if (region.region_ipes === 'Sud')
                                window.loggedIn = 'ipes_Sud';
                            else
                            if (region.region_ipes === 'Sud-Ouest')
                                window.loggedIn = 'ipes_Sud_Ouest';


                        }

                    }


                }


            });


        }
    }]).controller('presentation_content_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
            //  gestion du nom ipes suivant le clic sur la liste des ipes
                    //liste des item du menu d'un ipes
                    {
                        $scope.loader = {
                            loading: false,
                        };

                        $scope.loader.loading = true;


                        $scope.region_presentation_ipes = service_gestion_ipes.getData_region_presentation_ipes($scope);



                    }]).controller('head_nom_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
                    //  gestion du nom ipes suivant le clic sur la liste des ipes
                            //liste des item du menu d'un ipes
                            {
                                $scope.loader = {
                                    loading: false,
                                };

                                $scope.loader.loading = true;
                                $scope.labelle_ipes = null;

                                $scope.ipes_menu = service_gestion_ipes.getData_menu($scope);
                                $scope.loader.loading = true;
                                $scope.etab_menu = service_gestion_ipes.getData_menu_etab($scope);
                                $scope.loader.loading = true;
                                $scope.diplome_menu = service_gestion_ipes.getData_menu_diplome($scope);
                                $scope.loader.loading = true;
                                $scope.filiere_menu = service_gestion_ipes.getData_menu_filiere($scope);
                                $scope.loader.loading = true;
                                $scope.specialite_menu = service_gestion_ipes.getData_menu_specialite($scope);
                                $scope.loader.loading = true;
                                $scope.data_elemet_diplome = service_gestion_ipes.getElement_diplome($scope);
                                $scope.loader.loading = true;


                                $scope.region_presentation_ipes = service_gestion_ipes.getData_region_presentation_ipes($scope);


                                for (var i = 0; i < $scope.region_presentation_ipes.length; i++) {
                                    var obj = $scope.region_presentation_ipes[i];

                                    for (var key in obj) {
                                        if (key == 'labelle_ipes')
                                        {
                                            $scope.labelle_ipes = obj[key];

                                        }

                                    }


                                }


                            }]).controller('affiche_ipes_all', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
                            //  gestion du nom ipes suivant le clic sur la liste des ipes
                                    //liste des item du menu d'un ipes
                                    {
                                        $scope.loader = {
                                            loading: false,
                                        };

//                                // recupere l'id de l'ipes choisie et appelle le template correspondant coté recherche ipes


                                        $scope.go_id_ipes_all = function(path)
                                        {


                                            $scope.loader.loading = true;

                                            //recupere le nom de la region de ipes clique a base de id ainsi que le champs presentation de l'ipes
                                            var promise = service_gestion_ipes.serverRequest6(path, $scope);
                                            $scope.loader.loading = true;

                                            promise.then(function()
                                            {

                                                $scope.loader.loading = true;
                                                $scope.region_presentation_ipes = service_gestion_ipes.getData_region_presentation_ipes($scope);
                                                var region = {};


                                                for (var i = 0; i < $scope.region_presentation_ipes.length; i++) {
                                                    var obj = $scope.region_presentation_ipes[i];

                                                    for (var key in obj) {
                                                        if (key == 'region_ipes')
                                                        {
 
                                                            region.region_ipes = obj[key];

                                                            if (region.region_ipes === 'Centre')
                                                                window.loggedIn = 'ipes_centre_all';
                                                            else
                                                            if (region.region_ipes === 'Adamaoua')
                                                                window.loggedIn = 'ipes_Adamaoua_all';
                                                            else
                                                            if (region.region_ipes === 'Est')
                                                                window.loggedIn = 'ipes_Est_all';
                                                            else
                                                            if (region.region_ipes === 'Extreme-Nord')
                                                                window.loggedIn = 'ipes_Extreme_Nord_all';
                                                            else
                                                            if (region.region_ipes === 'Littoral')
                                                                window.loggedIn = 'ipes_Littoral_all';
                                                            else
                                                            if (region.region_ipes === 'Nord')
                                                                window.loggedIn = 'ipes_Nord_all';
                                                            else
                                                            if (region.region_ipes === 'Nord-Ouest')
                                                                window.loggedIn = 'ipes_Nord_Ouest_all';
                                                            else
                                                            if (region.region_ipes === 'Ouest')
                                                                window.loggedIn = 'ipes_Ouest_all';
                                                            else
                                                            if (region.region_ipes === 'Sud')
                                                                window.loggedIn = 'ipes_Sud_all';
                                                            else
                                                            if (region.region_ipes === 'Sud-Ouest')
                                                                window.loggedIn = 'ipes_Sud_Ouest_all';


                                                        }

                                                    }


                                                }


                                            });


                                        }














                                    }]).controller('nom_region_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)
                                    //  gestion du nom ipes suivant le clic sur la liste des ipes
                                            //liste des item du menu d'un ipes
                                            {
                                                $scope.loader = {
                                                    loading: false,
                                                };

                                                $scope.loader.loading = true;
                                                $scope.region = null;

                                                $scope.region_presentation_ipes = service_gestion_ipes.getData_region_presentation_ipes($scope);


                                                for (var i = 0; i < $scope.region_presentation_ipes.length; i++) {
                                                    var obj = $scope.region_presentation_ipes[i];

                                                    for (var key in obj) {
                                                        if (key == 'region_ipes')
                                                        {
                                                            $scope.region = obj[key];

                                                        }

                                                    }


                                                }


                                            }]);