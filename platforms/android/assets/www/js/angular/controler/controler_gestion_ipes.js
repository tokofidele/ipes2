
ipescam.controller('cont_gestion_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        //gestion   des specialite:on clic sur la droite d'une specialite et
        // on recupere le planing de formation
        $scope.specialite_paning = function(path)
        {


            window.open('http://localhost/IpesServeur/Fchiers/M_2.pdf', "_blank", null);
            //service_gestion_ipes.serverRequest6(path);           

//               promise.then( function()
//               {               
//                   $scope.data_option= service_gestion_ipes.getData_option(); 
//               });


        }



    }]).controller('cont_gestion_menu_ipes', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
        $scope.loader = {
            loading: false,
        };

        $scope.go_item_menu = function(menu)
        {
            
            
             $scope.accueil = function()
            {
                $scope.loader.loading = true;
                window.loggedIn = 'accueil';
            }
            
            if (menu == "Etablissements")
            {
                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest(id_ipes.id_ipes, $scope);
                promise.then(function()
                {
                    window.loggedIn = 'etablissement';
                });

            }

            else
            if (menu == "Localisation et Adresse")
            {
                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                service_gestion_ipes.serverRequest11(id_ipes.id_ipes, $scope);

                var promise = service_gestion_ipes.serverRequest7(id_ipes.id_ipes, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'adresse_ipes';
                });

            }
            else

            if (menu == "Certification")
            {

            }
            else
            if (menu == "Agrément")
            {

                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest8(id_ipes.id_ipes, $scope);
                promise.then(function()
                {
                    window.loggedIn = 'agrement_ipes';
                });

            }


        }

        //action pour les ipes du coté de la recherche  
        $scope.go_item_menu_all = function(menu)
        {

            $scope.accueil_all = function()
            {
                $scope.loader.loading = true;
                window.loggedIn = 'accueil_all';
            }


            if (menu == "Etablissements")
            {
                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest(id_ipes.id_ipes, $scope);
                promise.then(function()
                {
                    window.loggedIn = 'etablissement_all';
                });

            }
            else
            if (menu == "Localisation et Adresse")
            {

                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                service_gestion_ipes.serverRequest11(id_ipes.id_ipes, $scope);

                var promise = service_gestion_ipes.serverRequest7(id_ipes.id_ipes, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'adresse_ipes_all';
                });



            }
            else
            if (menu == "Partenaires")
            {

            }

            else
            if (menu == "Agrément")
            {

                $scope.loader.loading = true;
                //la ligne suivante recupere id ipes cliqué mis dans le tableau du service
                var id_ipes = service_gestion_ipes.getData_id_ipes($scope);

                var promise = service_gestion_ipes.serverRequest8(id_ipes.id_ipes, $scope);
                promise.then(function()
                {
                    window.loggedIn = 'agrement_ipes_all';
                });

            }


        }

    }]).controller('gestion_etablissement', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {




        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.data_etablissement = service_gestion_ipes.getData_etablissement($scope); //liste des etablissements en fonction des ipes
        $scope.data_menu_adresse = service_gestion_ipes.getData_menu_adresse($scope); // menu adresse  d'un ipes
        $scope.data_adresse = service_gestion_ipes.getData_adresse_ipes($scope); // adresse en fonction d'un ipes
        $scope.data_quartier = service_gestion_ipes.getData_quartier_ipes($scope); // liste quartier d'un ipes
        $scope.data_agrement = service_gestion_ipes.getData_agrement_ipes($scope); // agrement en fonction d'un ipes 

 //gestion   des grilles enseignement:on clic sur une specialite et
        // on recupere l'id de la specialite et on recherche le liste des enseignement asscoiées 


//        $scope.go_id_specialite_grille = function(path)
//        {
//            $scope.loader.loading = true;
//            var promise = service_gestion_ipes.serverRequest10(path, $scope);
//
//            promise.then(function()
//            {
//                $scope.data_UE = service_gestion_ipes.getData_UE($scope);
//            });
//
//
//        }


        //gestion des etablissement:on clic sur un etablissement et
        // on recupere l'id de l'etablissement et on recherche le liste des diplome asscoié   

        $scope.go_id_etab = function(id_etab, labelle_etab)
        {
            $scope.loader.loading = true;
            //met le labelle etablissement dans le tableau en service et on le recupoer dans la page etablissement sans acces a la bd
            service_gestion_ipes.serverRequest12(labelle_etab, $scope);


            // recupere le champs presentation d'un etablissement 
            var promise = service_gestion_ipes.serverRequest13(id_etab, $scope);

            promise.then(function()
            {
                window.loggedIn = 'presentation_etab';
            });

        }
        
        
           //gestion des etablissement:on clic sur un etablissement et
        // on recupere l'id de l'etablissement et on recherche le liste des diplome asscoié   

        $scope.go_id_etab_rech_ipes = function(id_etab, labelle_etab)
        {
            $scope.loader.loading = true;
            //met le labelle etablissement dans le tableau en service et on le recupoer dans la page etablissement sans acces a la bd
            service_gestion_ipes.serverRequest12(labelle_etab, $scope);


            // recupere le champs presentation d'un etablissement 
            var promise = service_gestion_ipes.serverRequest13(id_etab, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_ipes_presentation_etab';
            });

        }
        
        
        
        
        
        




    }]).controller('gestion_menu_etab', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
        // gestion du menu present dans la fenetre diplome

        $scope.go_item_menu_etab = function(menu_etab)
        {

            if (menu_etab === "Présentation")
            {
                $scope.loader.loading = true;
                window.loggedIn = 'presentation_etab';
            }
            else
            if (menu_etab === "Listes diplômes")
            {

                $scope.loader.loading = true;
                var id_etab = service_gestion_ipes.getid_etab($scope);
                var promise = service_gestion_ipes.serverRequest1(id_etab, $scope);

                promise.then(function()
                {

                    window.loggedIn = 'diplome';
                });

            }
            else

            if (menu_etab === "Localisation et Adresse")
            {
                alert('En cours...')
            }



        }
        
        
        $scope.go_item_menu_rech_ipes = function(menu_etab)
        {

            if (menu_etab === "Présentation")
            {
                $scope.loader.loading = true;
                window.loggedIn = 'rech_ipes_presentation_etab';
            }
            else
            if (menu_etab === "Listes diplômes")
            {

                $scope.loader.loading = true;
                var id_etab = service_gestion_ipes.getid_etab($scope);
                var promise = service_gestion_ipes.serverRequest1(id_etab, $scope);

                promise.then(function()
                {

                    window.loggedIn = 'rech_ipes_diplome';
                });

            }
            else

            if (menu_etab === "Localisation et Adresse")
            {
                alert('En cours...')
            }



        }
        
        
        
        
        $scope.go_item_menu_rech_etab = function(menu_etab)
        {

            if (menu_etab === "Présentation")
            {
                $scope.loader.loading = true;
                window.loggedIn = 'rech_etab_presentation_etab';
            }
            else
            if (menu_etab === "Listes diplômes")
            {

                $scope.loader.loading = true;
                var id_etab = service_gestion_ipes.getid_etab($scope);
                var promise = service_gestion_ipes.serverRequest1(id_etab, $scope);

                promise.then(function()
                {

                    window.loggedIn = 'rech_etab_diplome';
                });

            }
            else

            if (menu_etab === "Localisation et Adresse")
            {
                alert('En cours...')
            }



        }





    }]).controller('gestion_diplome', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {

        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.data_diplome = service_gestion_ipes.getData_diplome($scope);
        $scope.presentation_etab = service_gestion_ipes.getPresentation_etab($scope);

        $scope.labelle_etab = service_gestion_ipes.getlabelle_etab($scope);



//        
//         $scope.loader_filiere = {
//            loading: false,
//        };
//         $scope.loader_diplome = {
//            loading: false,
//        };

//           $scope.data_diplome = service_gestion_ipes.getData_diplome($scope);

//            $scope.labelle_etab = service_gestion_ipes.getlabelle_etab();



        // $scope.data_etablissements_presentation = service_gestion_ipes.getData_presentation_etablissements();
        //gestion  des diplome:on clic sur un diplome et
        // on recupere l'id du diplome et on recherche le liste des filieres asscoiées 
        $scope.go_id_diplome = function(id_diplome, labelle_diplome)
        {

            $scope.loader.loading = true;
            //met le labelle diplome dans le tableau en service et on le recupoer dans la page filiere sans acces a la bd
            service_gestion_ipes.serverRequest14(labelle_diplome, $scope);
//             $scope.loader_diplome.loading = true;


            // recupere le champs presentation de du diplome
            var promise = service_gestion_ipes.serverRequest15(id_diplome, $scope);

            promise.then(function()
            {
                window.loggedIn = 'presentattion_diplome';
            });

        }
        
         // liste filiere sur rech ipes 
           $scope.go_id_diplome_rech_ipes = function(id_diplome, labelle_diplome)
        {

            $scope.loader.loading = true;
            //met le labelle diplome dans le tableau en service et on le recupoer dans la page filiere sans acces a la bd
            service_gestion_ipes.serverRequest14(labelle_diplome, $scope);
//             $scope.loader_diplome.loading = true;


            // recupere le champs presentation de du diplome
            var promise = service_gestion_ipes.serverRequest15(id_diplome, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_ipes_presentation_diplome';
            });

        }
        
        // liste filiere sur rech etab 
           $scope.go_id_diplome_rech_etab = function(id_diplome, labelle_diplome)
        {

            $scope.loader.loading = true;
            //met le labelle diplome dans le tableau en service et on le recupoer dans la page filiere sans acces a la bd
            service_gestion_ipes.serverRequest14(labelle_diplome, $scope);
//             $scope.loader_diplome.loading = true;


            // recupere le champs presentation de du diplome
            var promise = service_gestion_ipes.serverRequest15(id_diplome, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_etab_presentattion_diplome';
            });

        }
        
            // liste filiere sur rech diplome 
      $scope.go_id_diplome_rech_diplo = function(id_diplome, labelle_diplome)
        {
            $scope.loader.loading = true;
 
            //met le labelle diplome dans le tableau en service et on le recupoer dans la page filiere sans acces a la bd
            service_gestion_ipes.serverRequest14(labelle_diplome, $scope);
//             $scope.loader_diplome.loading = true;


            // recupere le champs presentation du diplome; le nom de l'etablissement et de l'ipes
            var promise = service_gestion_ipes.serverRequest23(id_diplome, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_diplo_presentation_diplome';
            });


        }


    }]).controller('gestion_menu_diplome', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
        // gestion du menu present dans la fenetre filiere


        $scope.go_item_menu_diplome = function(menu_diplome)
        {

            if (menu_diplome === "Présentation")
            {
                window.loggedIn = 'presentattion_diplome';
            }
            else
            if (menu_diplome === "Liste des filières")
            {
                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest2(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'filieres';
                });

            }
            else

            if (menu_diplome === "Condition accès")
            {

                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest9(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'dossier_candidature';

                });
            }



        }
        
           // operation  menu recherche ipes
         $scope.go_item_menu_rech_ipes_diplome = function(menu_diplome)
        {

            if (menu_diplome === "Présentation")
            {
                window.loggedIn = 'rech_ipes_presentation_diplome';
            }
            else
            if (menu_diplome === "Liste des filières")
            {
                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest2(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_filieres';
                });

            }
            else

            if (menu_diplome === "Condition accès")
            {

                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest9(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_dossier_candidature';

                });
            }



        }
        
           // operation  menu recherche etab
         $scope.go_item_menu_rech_etab_diplome = function(menu_diplome)
        {

            if (menu_diplome === "Présentation")
            {
                window.loggedIn = 'rech_etab_presentattion_diplome';
            }
            else
            if (menu_diplome === "Liste des filières")
            {
                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest2(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_filieres';
                });

            }
            else

            if (menu_diplome === "Condition accès")
            {

                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest9(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_dossier_candidature';

                });
            }



        }

//operation  menu recherche diplome
        $scope.go_item_menu_rech_diplo_diplome = function(menu_diplome)
        {

            if (menu_diplome === "Présentation")
            {
                window.loggedIn = 'rech_diplo_presentation_diplome';
            }
            else
            if (menu_diplome === "Liste des filières")
            {
                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest2(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_filieres';
                });

            }
            else

            if (menu_diplome === "Condition accès")
            {

                $scope.loader.loading = true;
                var id_diplome = service_gestion_ipes.getid_diplome($scope);
                var promise = service_gestion_ipes.serverRequest9(id_diplome, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_dossier_candidature';

                });
            }



        }




    }]).controller('gestion_filiere', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.labelle_diplome = service_gestion_ipes.getlabelle_diplome($scope);

        $scope.presentation_diplome = service_gestion_ipes.getPresentation_diplome($scope);

        $scope.data_filiere = service_gestion_ipes.getData_filiere($scope);

        $scope.data_dossier_candidature = service_gestion_ipes.getData_dossier_candidature($scope);

        $scope.data_elemet_diplome = service_gestion_ipes.getElement_diplome($scope); // presentation diplome, nom etab etipes

        //gestion   des filiere:on clic sur une filiere et
        // on recupere l'id de la filiere et on recherche le liste des specialité asscoiées 
        $scope.go_id_filiere = function(id_filiere, labelle_filiere)
        {
            $scope.loader.loading = true;

//met le labelle filiere dans le tableau en service et on le recupoer dans la page specialité sans acces a la bd
            service_gestion_ipes.serverRequest16(labelle_filiere, $scope);

            // recupere le champs presentation de d'une filiere
            var promise = service_gestion_ipes.serverRequest17(id_filiere, $scope);

            promise.then(function()
            {
                window.loggedIn = 'presentation_fielere';
            });


        }
        
        
             // liste filiere sur rech ipes
         $scope.go_id_filiere_rech_ipes = function(id_filiere, labelle_filiere)
        {
            $scope.loader.loading = true;

//met le labelle filiere dans le tableau en service et on le recupoer dans la page specialité sans acces a la bd
            service_gestion_ipes.serverRequest16(labelle_filiere, $scope);

            // recupere le champs presentation de d'une filiere
            var promise = service_gestion_ipes.serverRequest17(id_filiere, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_ipes_presentation_fielere';
            });
            
        }
        
        // liste filiere sur rech etab
         $scope.go_id_filiere_rech_etab = function(id_filiere, labelle_filiere)
        {
            $scope.loader.loading = true;

//met le labelle filiere dans le tableau en service et on le recupoer dans la page specialité sans acces a la bd
            service_gestion_ipes.serverRequest16(labelle_filiere, $scope);

            // recupere le champs presentation de d'une filiere
            var promise = service_gestion_ipes.serverRequest17(id_filiere, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_etab_presentation_fielere';
            });
            
        }
        
              // liste filiere sur rech diplome 
      $scope.go_id_filiere_rech_diplo = function(id_filiere, labelle_filiere)
        {
            $scope.loader.loading = true;

//met le labelle filiere dans le tableau en service et on le recupoer dans la page specialité sans acces a la bd
            service_gestion_ipes.serverRequest16(labelle_filiere, $scope);

            // recupere le champs presentation de d'une filiere
            var promise = service_gestion_ipes.serverRequest17(id_filiere, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_diplo_presentation_fielere';
            });


        }
        
        
                  // liste filiere sur rech diplome 
      $scope.go_id_filiere_rech_filiere = function(id_filiere, labelle_filiere)
        {
            $scope.loader.loading = true;

//met le labelle filiere dans le tableau en service et on le recupoer dans la page specialité sans acces a la bd
            service_gestion_ipes.serverRequest16(labelle_filiere, $scope);

            // recupere le champs presentation de d'une filiere, nom IPES, etab et diplome
            var promise = service_gestion_ipes.serverRequest25(id_filiere, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_filiere_presentation_fielere';
            });


        }


    }]).controller('gestion_menu_filiere', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {

        $scope.loader = {
            loading: false,
        };
        // gestion du menu present dans la fenetre filiere


        $scope.go_item_menu_filiere = function(menu_filiere)
        {

            if (menu_filiere === "Présentation")
            {
                window.loggedIn = 'presentation_fielere';
            }
            else
            if (menu_filiere === "Tutelle ou Partenaire académique")
            {

                window.loggedIn = 'tutelle';
            }
            else

            if (menu_filiere === "Liste des spécialités")
            {

                $scope.loader.loading = true;
                var id_filiere = service_gestion_ipes.getid_filiere($scope);
                var promise = service_gestion_ipes.serverRequest3(id_filiere, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'specialite';

                });
            }



        }
        
         // operation menu recherche ipes
        $scope.go_item_menu_rech_ipes_filiere = function(menu_filiere)
        {

            if (menu_filiere === "Présentation")
            {
                window.loggedIn = 'rech_ipes_presentation_fielere';
            }
            else
            if (menu_filiere === "Tutelle ou Partenaire académique")
            {

                window.loggedIn = 'rech_ipes_tutelle';
            }
            else

            if (menu_filiere === "Liste des spécialités")
            {

                $scope.loader.loading = true;
                var id_filiere = service_gestion_ipes.getid_filiere($scope);
                var promise = service_gestion_ipes.serverRequest3(id_filiere, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_specialite';

                });
            }



        }
        
        
        // operation menu recherche etab
        $scope.go_item_menu_rech_etab_filiere = function(menu_filiere)
        {

            if (menu_filiere === "Présentation")
            {
                window.loggedIn = 'rech_etab_presentation_fielere';
            }
            else
            if (menu_filiere === "Tutelle ou Partenaire académique")
            {

                window.loggedIn = 'rech_etab_tutelle';
            }
            else

            if (menu_filiere === "Liste des spécialités")
            {

                $scope.loader.loading = true;
                var id_filiere = service_gestion_ipes.getid_filiere($scope);
                var promise = service_gestion_ipes.serverRequest3(id_filiere, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_specialite';

                });
            }



        }
        
        // operation menu recherche diplome
        $scope.go_item_menu_rech_diplo_filiere = function(menu_filiere)
        {

            if (menu_filiere === "Présentation")
            {
                window.loggedIn = 'rech_diplo_presentation_fielere';
            }
            else
            if (menu_filiere === "Tutelle ou Partenaire académique")
            {

                window.loggedIn = 'rech_diplo_tutelle';
            }
            else

            if (menu_filiere === "Liste des spécialités")
            {

                $scope.loader.loading = true;
                var id_filiere = service_gestion_ipes.getid_filiere($scope);
                var promise = service_gestion_ipes.serverRequest3(id_filiere, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_specialite';

                });
            }



        }
        
        
         // operation menu recherche filiere
        $scope.go_item_menu_rech_filiere_filiere = function(menu_filiere)
        {

            if (menu_filiere === "Présentation")
            {
                window.loggedIn = 'rech_filiere_presentation_fielere';
            }
            else
            if (menu_filiere === "Tutelle ou Partenaire académique")
            {

                window.loggedIn = 'rech_filiere_tutelle';
            }
            else

            if (menu_filiere === "Liste des spécialités")
            {

                $scope.loader.loading = true;
                var id_filiere = service_gestion_ipes.getid_filiere($scope);
                var promise = service_gestion_ipes.serverRequest3(id_filiere, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_filiere_specialite';

                });
            }



        }





    }]).controller('gestion_specialite', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {


        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.labelle_filiere = service_gestion_ipes.getlabelle_filiere($scope);

        $scope.presentation_filiere = service_gestion_ipes.getPresentation_filiere($scope);


        $scope.data_specialite = service_gestion_ipes.getData_specialite($scope);
        $scope.data_element_filiere = service_gestion_ipes.get_Element_filiere($scope);
       
       
       
        //gestion   des specialite:on clic sur une specialite et
        // on recupere l'id de la specialite et on recherche le liste des option asscoiées 




        $scope.go_id_specialite = function(id_specialite, labelle_specialite)
        {
            $scope.loader.loading = true;
//met le labelle specialité dans le tableau en service et on le recupoer dans la page option sans acces a la bd
            service_gestion_ipes.serverRequest18(labelle_specialite, $scope);

            // recupere le champs presentation de d'une specialité
            var promise = service_gestion_ipes.serverRequest19(id_specialite, $scope);

            promise.then(function()
            {
                window.loggedIn = 'presentation_specialite';
            });



        }
        
        
          //presentation specialité coté recherche ipes
          $scope.go_id_specialite_rech_ipes = function(id_specialite, labelle_specialite)
        {
            $scope.loader.loading = true;
//met le labelle specialité dans le tableau en service et on le recupoer dans la page option sans acces a la bd
            service_gestion_ipes.serverRequest18(labelle_specialite, $scope);

            // recupere le champs presentation de d'une specialité
            var promise = service_gestion_ipes.serverRequest19(id_specialite, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_ipes_presentation_specialite';
            });

         }
        
        //presentation specialité coté recherche etab
         $scope.go_id_specialite_rech_etab = function(id_specialite, labelle_specialite)
        {
            $scope.loader.loading = true;
//met le labelle specialité dans le tableau en service et on le recupoer dans la page option sans acces a la bd
            service_gestion_ipes.serverRequest18(labelle_specialite, $scope);

            // recupere le champs presentation de d'une specialité
            var promise = service_gestion_ipes.serverRequest19(id_specialite, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_etab_presentation_specialite';
            });

         }
         
           //presentation specialité coté recherche diplome
            $scope.go_id_specialite_rech_diplo = function(id_specialite, labelle_specialite)
        {
            $scope.loader.loading = true;
//met le labelle specialité dans le tableau en service et on le recupoer dans la page option sans acces a la bd
            service_gestion_ipes.serverRequest18(labelle_specialite, $scope);

            // recupere le champs presentation de d'une specialité
            var promise = service_gestion_ipes.serverRequest19(id_specialite, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_diplo_presentation_specialite';
            });

         }
         
           //presentation specialité coté recherche filiere
            $scope.go_id_specialite_rech_filiere = function(id_specialite, labelle_specialite)
        {
            $scope.loader.loading = true;
//met le labelle specialité dans le tableau en service et on le recupoer dans la page option sans acces a la bd
            service_gestion_ipes.serverRequest18(labelle_specialite, $scope);

            // recupere le champs presentation de d'une specialité
            var promise = service_gestion_ipes.serverRequest19(id_specialite, $scope);

            promise.then(function()
            {
                window.loggedIn = 'rech_filiere_presentation_specialite';
            });

         }




    }]).controller('gestion_option', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {



        $scope.loader = {
            loading: false,
        };

        $scope.loader.loading = true;
        $scope.labelle_specialite = service_gestion_ipes.getlabelle_specialite($scope);

        $scope.presentation_specialite = service_gestion_ipes.getPresentation_specialite($scope);

        $scope.data_option = service_gestion_ipes.getData_option($scope);
        $scope.data_UE = service_gestion_ipes.getData_UE($scope);
        $scope.programme_academique = service_gestion_ipes.getprogramme_academique($scope);




    }]).controller('gestion_menu_specialite', ['$scope', 'service_gestion_ipes', function($scope, service_gestion_ipes)

    {
        // gestion du menu present dans la fenetre filiere


        $scope.go_item_menu_specialite = function(menu_specialite)
        {

            if (menu_specialite === "Présentation")
            {
                window.loggedIn = 'presentation_specialite';
            }
            else
            if (menu_specialite === "Programme académique")
            {

                //                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest20(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'programme_academiq';

                });
            }
            else

            if (menu_specialite === "Grille des enseignements")
            {


//$scope.loader_specialie_grille.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest10(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'grille_enseignement';
                });


            }

            else

            if (menu_specialite === "Liste des Options")
            {

//                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest4(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'option';

                });
            }

        }
        
        // operation menu sur recherche ipes
         $scope.go_item_menu_specialite_rech_ipes = function(menu_specialite)
        {

            if (menu_specialite === "Présentation")
            {
                window.loggedIn = 'rech_ipes_presentation_specialite';
            }
            else
            if (menu_specialite === "Programme académique")
            {

                //                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest20(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_programme_academiq';

                });
            }
            else

            if (menu_specialite === "Grille des enseignements")
            {


//$scope.loader_specialie_grille.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest10(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_grille_enseignement';
                });


            }

            else

            if (menu_specialite === "Liste des Options")
            {

//                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest4(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_ipes_option';

                });
            }

        }
        
        
        // operation menu sur recherche etab
         $scope.go_item_menu_specialite_rech_etab = function(menu_specialite)
        {

            if (menu_specialite === "Présentation")
            {
                window.loggedIn = 'rech_etab_presentation_specialite';
            }
            else
            if (menu_specialite === "Programme académique")
            {

                //                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest20(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_programme_academiq';

                });
            }
            else

            if (menu_specialite === "Grille des enseignements")
            {


//$scope.loader_specialie_grille.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest10(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_grille_enseignement';
                });


            }

            else

            if (menu_specialite === "Liste des Options")
            {

//                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest4(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_etab_option';

                });
            }

        }
        
        
        // operation menu sur recherche diplome
         $scope.go_item_menu_specialite_rech_diplo = function(menu_specialite)
        {

            if (menu_specialite === "Présentation")
            {
                window.loggedIn = 'rech_diplo_presentation_specialite';
            }
            else
            if (menu_specialite === "Programme académique")
            {

                //                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest20(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_programme_academiq';

                });
            }
            else

            if (menu_specialite === "Grille des enseignements")
            {


//$scope.loader_specialie_grille.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest10(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_grille_enseignement';
                });


            }

            else

            if (menu_specialite === "Liste des Options")
            {

//                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest4(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_diplo_option';

                });
            }

        }
        
        
        // operation menu sur recherche filiere
         $scope.go_item_menu_specialite_rech_filiere = function(menu_specialite)
        {

            if (menu_specialite === "Présentation")
            {
                window.loggedIn = 'rech_filiere_presentation_specialite';
            }
            else
            if (menu_specialite === "Programme académique")
            {

                //                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest20(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_filiere_programme_academiq';

                });
            }
            else

            if (menu_specialite === "Grille des enseignements")
            {


//$scope.loader_specialie_grille.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest10(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_filiere_grille_enseignement';
                });


            }

            else

            if (menu_specialite === "Liste des Options")
            {

//                $scope.loader_diplome_dossier.loading = true;
                var id_specialite = service_gestion_ipes.getid_specialite();

                var promise = service_gestion_ipes.serverRequest4(id_specialite, $scope);

                promise.then(function()
                {
                    window.loggedIn = 'rech_filiere_option';

                });
            }

        }





    }]);
   