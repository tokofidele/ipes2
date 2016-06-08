
//Le service de connexion d'un utilisateur a l'apllication'

ipescam.factory('service_gestion_ipes', function($q, $http) {


    /*
     * Dans cette partie on fait appel on verifie si lutilisateur est enregistrer et si oui 
     * on ouffre le template correspondant
     */


    var data_etablissement = {};
    var data_diplome = {};
    var data_filiere = {};
    var data_specialite = {};
    var data_agrement_ipes = {};
    var data_option = {};
    var data_nom_presentation_ipes = {};
    var data_region_presntation_ipes = {};
    var data_id_ipes = {};
    var data_adresse_ipes = {};
    var data_quartier_ipes = {};
    var data_menu_adresse = {};
    var data_dossier = {};
    var data_UE = {};
    var labelle_etab = {};
    var labelle_diplome = {};
    var labelle_filiere = {};
    var labelle_specialite = {};
    var liste_all_etab = {};
     var liste_all_diplome = {};
     var element_diplome = {};
     var element_filiere = {};
     
     var liste_all_filiere = {};


    var id_etablissement = {};
    var id_diplome = {};
    var id_filiere = {};
    var id_specialite = {};

    var presentation_etab = {};
    var presentation_diplome = {};
    var presentation_filiere = {};
    var presentation_specialite = {};
    var programme_académique = {};

    return {
        // retourne la liste du menu d'un IPES
        getData_menu: function($scope)
        {
            data_menu = [{'menu': 'Etablissements'},
                {'menu': 'Localisation et Adresse'},
                // {'menu': 'Partenaires'},
                {'menu': 'Certification'},
                {'menu': 'Agrément'},
                {'menu': 'Tutelle ou Partenaire académique'},
            ];
            $scope.loader.loading = false;
            return data_menu;

        },
        // retourne la liste du menu d'un etablissement
        getData_menu_etab: function($scope)
        {
            data_menu_etab = [{'menu_etab': 'Présentation'},
                {'menu_etab': 'Listes diplômes'},
                {'menu_etab': 'Localisation et Adresse'}
//                 {'menu_etab': 'Adresse'}
                // {'menu': 'Agrément'},
            ];
            $scope.loader.loading = false;
            return data_menu_etab;

        },
        // retourne la liste du menu d'un diplome
        getData_menu_diplome: function($scope)
        {
            data_menu_diplome = [{'menu_diplome': 'Présentation'},
                {'menu_diplome': 'Liste des filières'},
                {'menu_diplome': 'Condition accès'}
                // {'menu': 'Certification'},
                // {'menu': 'Agrément'},
            ];
            $scope.loader.loading = false;
            return data_menu_diplome;

        },
        // retourne la liste du menu d'une filiere
        getData_menu_filiere: function($scope)
        {
            data_menu_filier = [{'menu_filiere': 'Présentation'},
                {'menu_filiere': 'Tutelle ou Partenaire académique'},
                {'menu_filiere': 'Liste des spécialités'}
//                 {'menu': 'Liste des Options'},
                // {'menu': 'Certification'},
                // {'menu': 'Agrément'},
            ];
            $scope.loader.loading = false;
            return data_menu_filier;

        },
        // retourne la liste du menu d'une specialite
        getData_menu_specialite: function($scope)
        {
            data_menu_specialite = [{'menu_specialite': 'Présentation'},
                {'menu_specialite': 'Programme académique'},
                {'menu_specialite': 'Grille des enseignements'},
                {'menu_specialite': 'Liste des Options'}
                // {'menu': 'Agrément'},
            ];
            $scope.loader.loading = false;
            return data_menu_specialite;

        },
        // retourne la presentataion d'un ipes suivi de la region ds laquel il existe
        getData_region_presentation_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_region_presntation_ipes;

        },
        // retourne la presentataion d'un etablissements
        getPresentation_etab: function($scope)
        {
            $scope.loader.loading = false;
            return presentation_etab;

        },
        // retourne la presentataion d'un etablissements
        getPresentation_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return presentation_diplome;

        },
        
        
         // retourne la presentataion diplome, nom etablissement et nom ipes
        getElement_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return element_diplome;

        },
        
        // retourne la presentataion d'une filiere
        getPresentation_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return presentation_filiere;

        },
        // retourne la presentataion d'une specialite
        getPresentation_specialite: function($scope)
        {
            $scope.loader.loading = false;
            return presentation_specialite;

        },
        // retourne la programme academique d'une specialite
        getprogramme_academique: function($scope)
        {
            $scope.loader.loading = false;
            return programme_académique;

        },
        //  recupere nom l'etablissement cliqué
        getlabelle_etab: function($scope)
        {
            $scope.loader.loading = false;
            return labelle_etab;

        },
        //  recupere nom diplome cliqué
        getlabelle_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return labelle_diplome;

        },
        //  recupere nom filiere cliqué
        getlabelle_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return labelle_filiere;

        },
        //  recupere nom specialite cliqué
        getlabelle_specialite: function($scope)
        {
            $scope.loader.loading = false;
            return labelle_specialite;

        },
        
           // liste etablissement
        get_all_etablissements: function($scope)
        {
            $scope.loader.loading = false;
            return liste_all_etab;

        },
        
             //  liste diplome
        get_all_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return liste_all_diplome;

        },
        
              //  liste filiere
        get_Element_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return element_filiere;

        },
              //  liste filiere
        get_all_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return liste_all_filiere;

        },
        //  recupere id l'etablissement cliqué
        getid_etab: function($scope)
        {
            $scope.loader.loading = false;
            return id_etablissement;

        },
        //  recupere id diplome cliqué
        getid_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return id_diplome;

        },
        //  recupere id filiere cliqué
        getid_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return id_filiere;

        },
        //  recupere id specialite cliqué
        getid_specialite: function()
        {

            return id_specialite;

        },
        // retourne l'agrement d'un ipes
        getData_agrement_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_agrement_ipes;

        },
        // retourne l'adresse d'un ipes
        getData_adresse_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_adresse_ipes;

        },
        // retourne liste quartier d'un ipes
        getData_quartier_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_quartier_ipes;

        },
        // retourne la liste du menu qdresse d'un IPES
        getData_menu_adresse: function($scope)
        {
            data_menu_adresse = [{'menu': 'Site web'},
                {'menu': 'Téléphone'},
                {'menu': 'Boite postale'},
                {'menu': 'Fax'},
                {'menu': 'Mail'},
                {'menu': 'Localisation'},
            ];
            $scope.loader.loading = false;
            return data_menu_adresse;

        },
        // retourne l'id ipes cliqué
        getData_id_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_id_ipes;

        },
        // retourne le nom de ipes clické
        getData_nom_presentation_ipes: function($scope)
        {
            $scope.loader.loading = false;
            return data_nom_presentation_ipes;

        },
        // retourne la liste des etablissements
        getData_etablissement: function($scope)
        {
            $scope.loader.loading = false;
            return data_etablissement;

        },
        // retourne la liste des diplome
        getData_diplome: function($scope)
        {
            $scope.loader.loading = false;
            return data_diplome;

        },
        // retourne la liste des diplome
        getData_dossier_candidature: function($scope)
        {
            $scope.loader.loading = false;
            return data_dossier;

        },
        // retourne la liste des filieres
        getData_filiere: function($scope)
        {
            $scope.loader.loading = false;
            return data_filiere;

        },
        // retourne la liste des specialite
        getData_specialite: function($scope)
        {
            $scope.loader.loading = false;
            return data_specialite;

        },
        // retourne la liste des unite d'enseignements d'unespecialite
        getData_UE: function($scope)
        {
            $scope.loader.loading = false;
            return data_UE;

        },
        // retourne la liste des options
        getData_option: function($scope)
        {
            $scope.loader.loading = false;
            return data_option;

        },
        //  liste les etablissements par clic sur un ipes   
        serverRequest: function(id_ipes, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_etablissement.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {


                data_etablissement = data;
                $scope.loader.loading = false;
                deferred.resolve(data_etablissement);

            });
            return deferred.promise;


        },
        //   recupere la presentation d'un etablissement
        serverRequest13: function(id_etab, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_presentation_etablissement.php",
                data: {'id_etab': id_etab}
            }).success(function(data)
            {

                id_etablissement = id_etab;
                presentation_etab = data;

                $scope.loader.loading = false;
                deferred.resolve(presentation_etab);

            });
            return deferred.promise;


        },
        //   recupere la presentation d'un diplome
        serverRequest15: function(id_diplom, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_presentation_diplome.php",
                data: {'id_diplome': id_diplom}
            }).success(function(data)
            {

                id_diplome = id_diplom;
                presentation_diplome = data.presentation;

                $scope.loader.loading = false;
                deferred.resolve(presentation_diplome);

            });
            return deferred.promise;


        },
        //   recupere la presentation d'une filiere
        serverRequest17: function(id_filier, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_presentation_filiere.php",
                data: {'id_filiere': id_filier}
            }).success(function(data)
            {

                id_filiere = id_filier;
                presentation_filiere = data;

                $scope.loader.loading = false;
                deferred.resolve(presentation_filiere);

            });
            return deferred.promise;


        },
        //   recupere la presentation d'une specialite
        serverRequest19: function(id_specialit, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_presentation_specialite.php",
                data: {'id_specialite': id_specialit}
            }).success(function(data)
            {

                id_specialite = id_specialit;
                presentation_specialite = data.presentation_specia;

                $scope.loader.loading = false;
                deferred.resolve(presentation_specialite);

            });
            return deferred.promise;


        },
        //   recupere la planing academique d'une specialite
        serverRequest20: function(id_specialit, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_programme_academique.php",
                data: {'id_specialite': id_specialit}
            }).success(function(data)
            {


                programme_académique = data;

                $scope.loader.loading = false;
                deferred.resolve(programme_académique);

            });
            return deferred.promise;


        },
        
        
        
        //   recupere la liste des établissements
        serverRequest21: function($scope) {

            var deferred = $q.defer();
            
            //cette variable ne sert a rien d'autre que detre passer au serveur mais nest pas recuperer juste pr respecter la syntaxe
           var all_etab=0;

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_affiche_etab_all.php",
              data: {'all_etab': all_etab}
            }).success(function(data)
            {


                liste_all_etab = data;

                $scope.loader.loading = false;
                deferred.resolve(liste_all_etab);

            });
            return deferred.promise;


        },
        
            //   recupere la liste des DIPLOMES
        serverRequest22: function($scope) {

            var deferred = $q.defer();
            
            //cette variable ne sert a rien d'autre que detre passer au serveur mais nest pas recuperer juste pr respecter la syntaxe
           var all_diplome=0;

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_affiche_diplome_all.php",
              data: {'all_diplom': all_diplome}
            }).success(function(data)
            {


                liste_all_diplome = data;

                $scope.loader.loading = false;
                deferred.resolve(liste_all_diplome);

            });
            return deferred.promise;


        },
        
        
               //   recupere la liste des DIPLOMES
        serverRequest24: function($scope) {

            var deferred = $q.defer();
            
            //cette variable ne sert a rien d'autre que detre passer au serveur mais nest pas recuperer juste pr respecter la syntaxe
           var all_filiere=0;

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_affiche_filiere_all.php",
              data: {'all_filier': all_filiere}
            }).success(function(data)
            {


                liste_all_filiere = data;

                $scope.loader.loading = false;
                deferred.resolve(liste_all_filiere);

            });
            return deferred.promise;


        },
        
        
        
        
        
        
        
        
        
        
        
        
        //  liste les diplome par clis sur un etablissements  
        serverRequest1: function(id_etab, $scope) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_diplome.php",
                data: {'id_etabl': id_etab}
            }).success(function(data)
            {

//                presentation_etab = {};


//              for(var i=0;i<data.length;i++) {
//                var obj = data[i];
//                
//                    for(var key in obj){
//                        if(key=='presentation')
//                        {
////                             alert(obj[key]);
//                          presentation_etab.presentation = obj[key];
//                        }
//                        
//                      }
//                
//               
//              }

                data_diplome = data;


//                $scope.loader_etab.loading = false;
                deferred.resolve(data_diplome);

            });
            return deferred.promise;


        },
        //  liste les filieres par clis sur un diplome  
        serverRequest2: function(id_diplome, $scope) {
            // ou sigle n'est rien d'autre que le path envoye ddepuis le controleur
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_filiere.php",
                data: {'id_diplome': id_diplome}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_filiere = data;
//                $scope.loader_diplome.loading = false;
                deferred.resolve(data_filiere);

            });
            return deferred.promise;


        },
        //  liste les specialité par clis sur une filiere  
        serverRequest3: function(id_filiere, $scope) {
            // ou sigle n'est rien d'autre que le path envoye ddepuis le controleur
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_specialite.php",
                data: {'id_filiere': id_filiere}
            }).success(function(data)
            {

                data_specialite = data;
                $scope.loader.loading = false;
                deferred.resolve(data_specialite);

            });
            return deferred.promise;


        },
        //  liste les options par clis sur une spécialité  
        serverRequest4: function(id_spécialite, $scope) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_option.php",
                data: {'id_spécialite': id_spécialite}
            }).success(function(data)
            {


                data_option = data;
//                $scope.loader_specialie.loading = false;
                deferred.resolve(data_option);

            });
            return deferred.promise;


        },
        //  recupere le nom et presentation de l'ipes cliqué  
        serverRequest5: function(id_ipes, $scope) {

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_nom_presentation_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {


                data_nom_presentation_ipes = data;
                $scope.loader.loading = false;
                deferred.resolve(data_nom_presentation_ipes);

            });
            return deferred.promise;


        },
        //  recupere le champs region  de ipes  cliqué et sa presentation
        serverRequest6: function(id_ipes, $scope) {
//            // la ligne suivante renvoi l'id de l'ipes cliqué qui sera utilisé dans le menu pour lister les etablissemet d'un ipes
            data_id_ipes.id_ipes = id_ipes;

            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_region_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {


                data_region_presntation_ipes = data;
                $scope.loader.loading = false;
                deferred.resolve(data_region_presntation_ipes);

            });
            return deferred.promise;


        },
//        
//        

        //  recupere  l'adresse d'un ipes  
        serverRequest7: function(id_ipes, $scope) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_adresse_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

                data_adresse_ipes = data;
                $scope.loader.loading = false;
                deferred.resolve(data_adresse_ipes);

            });
            return deferred.promise;


        },
        //  recupere la l'agrement d'un ipes  
        serverRequest8: function(id_ipes, $scope) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_agrement_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

//                                    $scope.data_Ipes=data; 
//                                    data_Ipes=$scope.data_Ipes;

                data_agrement_ipes = data;
                $scope.loader.loading = false;
                deferred.resolve(data_agrement_ipes);

            });
            return deferred.promise;


        },
        //  recupere le champs dossier candidature du diplome choisi
        serverRequest9: function(id_diplome, $scope) {


            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_dossier_candidature.php",
                data: {'id_diplome': id_diplome}
            }).success(function(data)
            {


                data_dossier = data;
                $scope.loader.loading = false;
                deferred.resolve(data_dossier);

            });
            return deferred.promise;


        },
        //  prend id specialité en paramettre et recherche les unite enseignement liée.
        serverRequest10: function(id_spécialite, $scope) {


            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_unite_enseignement.php",
                data: {'id_spécialite': id_spécialite}
            }).success(function(data)
            {


                data_UE = data;
                $scope.loader.loading = false;
                deferred.resolve(data_UE);

            });
            return deferred.promise;


        },
        //  recupere  la liste des quartier  d'un ipes  
        serverRequest11: function(id_ipes, $scope) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_data_quartier_ipes.php",
                data: {'id_ipes': id_ipes}
            }).success(function(data)
            {

                data_quartier_ipes = data;
                $scope.loader.loading = false;
                deferred.resolve(data_quartier_ipes);

            });
            return deferred.promise;


        },
        
           //   recupere la presentation d'un diplome, om de l'etablisseent et de l'ipes
        serverRequest23: function(id_diplom, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_element_diplome.php",
                data: {'id_diplome': id_diplom}
            }).success(function(data)
            {

                id_diplome = id_diplom;
                element_diplome = data;

                $scope.loader.loading = false;
                deferred.resolve(element_diplome);

            });
            return deferred.promise;


        },
        
        
                //   recupere la presentation d'un filiere, nom de l'etablisseent et de l'ipes, nom diplome
        serverRequest25: function(id_filier, $scope) {

            var deferred = $q.defer();


            $http({
                method: 'POST',
                url: "http://41.205.8.159/web/IpesServeur/client-controleur/cont_element_filiere.php",
                data: {'id_filiere': id_filier}
            }).success(function(data)
            {

                id_filiere = id_filier;
                element_filiere = data;

                $scope.loader.loading = false;
                deferred.resolve(element_filiere);

            });
            return deferred.promise;


        },
        
        
        
        //  recupere nom l'etablissement cliqué
        serverRequest12: function(labelle_etablissement, $scope) {

            labelle_etab = labelle_etablissement;
            $scope.loader.loading = false;
            return  labelle_etab;


        },
        //  recupere nom diplome cliqué
        serverRequest14: function(labelle_diplom, $scope) {

            labelle_diplome = labelle_diplom;
            $scope.loader.loading = false;
            return  labelle_diplome;


        },
        //  recupere nom filiere cliqué
        serverRequest16: function(labelle_filier, $scope) {

            labelle_filiere = labelle_filier;
            $scope.loader.loading = false;
            return  labelle_filiere;


        },
        //  recupere nom filiere cliqué
        serverRequest18: function(labelle_specialit, $scope) {

            labelle_specialite = labelle_specialit;
            $scope.loader.loading = false;
            return  labelle_specialite;


        },
    };
});







