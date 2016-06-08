
window.loggedIn = 'home';
ipescam.controller('homeControler', ['$scope', function($scope)

    {


        $scope.title_compte = "Creez un compte IPESCAM";


        //permet d'associe le style jquery mobile aux pqge incluent
        $scope.$on("$includeContentLoaded", function()
        {
            $("#mainDiv").trigger("create");
        });



        //appelle vers page  homeHead.html
        $scope.getHeadTemplate = function()
        {
            //appelle vers page  homeHead.html 
            //admin
            if (window.loggedIn == 'admin_region')
                return "admin-vue/adminHeader.html";

            else


            if (window.loggedIn == 'ajouter_planing')
                return "admin-vue/ajouter_planing_Head.html";

            else


            if (window.loggedIn == 'admin_action')
                return "admin-vue/admin_action_Head.html";

            //ajouter IPES
            else

            if (window.loggedIn == 'ajouter_ipes')
                return "admin-vue/ajouter_ipes_Head.html";

            //ajouter adresse a un IPES
            else

            if (window.loggedIn == 'ajouter_adresse_ipes')
                return "admin-vue/ajouter_adresse_ipes_Head.html";

            //ajouter quartier pour  un IPES
            else

            if (window.loggedIn == 'ajouter_quartier_ipes')
                return "admin-vue/ajouter_quartier_Head.html";




            //ajouter etablissement
            else
            if (window.loggedIn == 'add_etabissement')
                return "admin-vue/ajouter_etablissement_Head.html";

            //ajouter diplome
            else
            if (window.loggedIn == 'add_diplome')
                return "admin-vue/ajouter_diplome_Head.html";

            //ajouter filiere
            else
            if (window.loggedIn == 'add_filiere')
                return "admin-vue/ajouter_filiere_Head.html";

            //ajouter specialite
            else
            if (window.loggedIn == 'add_specialite')
                return "admin-vue/ajouter_specialite_Head.html";

            //ajouter piece dossier candidature
            else
            if (window.loggedIn == 'add_piece')
                return "admin-vue/ajouter_piece_Head.html";


            //ajouter semestre
            else
            if (window.loggedIn == 'add_semestre')
                return "admin-vue/ajouter_semestre_head.html";

            //ajouter option
            else
            if (window.loggedIn == 'add_option')
                return "admin-vue/ajouter_option_head.html";


 //ajouter programme
            else
            if (window.loggedIn == 'add_programme_academique')
                return "admin-vue/ajouter_programme_académique_head.html";






//ajouter annonce
            if (window.loggedIn == 'ajouter_annonce')
                return "admin-vue/ajouter_annonce_Head.html";


            //fin admin



            else
            //appelle du template head home  
            if (window.loggedIn == 'home')
                return "homeHead.html";

            else
            //appelle du template head liste region  
            if (window.loggedIn == 'region')
                return "client-vue/regionHeader.html";

            else

            //appelle du template head liste region centre               
            if (window.loggedIn == 'liste_ipes_Centre')
                return "client-vue/ipes/index_centre_head.html";

            else
            //appelle du template head liste region Adamaoua               
            if (window.loggedIn == 'liste_ipes_Adamaoua')
                return "client-vue/ipes/index_Adamaoua_head.html";


            else
            //appelle template head de la liste des ipes par region        
            if (window.loggedIn == 'liste_ipes_region')
                return "client-vue/ipes/index_liste_ipes_head.html";

            else
            // template head action differee               
            if (window.loggedIn == 'action')
                return "client-vue/Action_Head.html";

            else
//           template head recherche Ipes  de actions différées   
            if (window.loggedIn == 'recherhce')
                return "client-vue/recherche_ipes_head.html";
        
           else
//           template head recherche etablissemets  de actions différées   
            if (window.loggedIn == 'recherche_etablissements')
                return "client-vue/recherche_etab_head.html";
        
        
         else
//           template head recherche diplomes  de actions différées   
            if (window.loggedIn == 'recherche_diplome')
                return "client-vue/recherche_diplome_head.html";
        
              else
//           template head recherche filiere  de actions différées   
            if (window.loggedIn == 'recherche_filiere')
                return "client-vue/recherche_filiere_head.html";
        
        
        

            else

            //     template head envoyer message a un Ipes 
            if (window.loggedIn == 'envoyer')
                return "client-vue/envoi_message_head.html";


            else

            //     template head lire annonce d'un Ipes 
            if (window.loggedIn == 'lire_annonce')
                return "client-vue/lire_annonce_head.html";

            else

            //     template head pour creer un compte Ipes 
            if (window.loggedIn == 'compte')
                return "compte_Head.html";
        
          else

  //     template head pour afficher presentation de la liste des  etablissements coté recherce ou action differée
               if (window.loggedIn == 'presentation_recherche_etab' ||
                   window.loggedIn == 'rech_etab_presentation_etab')
                return "client-vue/ipes/presentation_recherche_etab_head.html";
        
       
          else

            //     template head pour afficher presentation et la liste des diplome d'un etablissements 
            if (window.loggedIn == 'presentation_etab' ||
                window.loggedIn == 'diplome')
                return "client-vue/ipes/presentation_etab_head.html";
        
        
         //     template head pour afficher presentation et la liste des diplome d'un etablissements cote recherche ipes
            if (window.loggedIn == 'rech_ipes_presentation_etab' ||
                window.loggedIn == 'rech_ipes_diplome')
                return "client-vue/ipes/presentation_etab_rech_ipes_head.html";
        
        
        
        
        
          else

            //     template head pour afficher presentation et la liste des diplome d'un etablissements / recherche etab
            if (window.loggedIn == 'rech_etab_diplome')
                return "client-vue/ipes/presentation_recherche_etab_head.html";
        
        
        
        else
        //     template head pour afficher la liste des filiere d'un diplomes 
            if (window.loggedIn == 'presentattion_diplome' ||
                window.loggedIn == 'filieres' ||
               window.loggedIn == 'dossier_candidature' )
                return "client-vue/ipes/filiere_head.html";
        
        
        
         
        else
        //     template head pour afficher la liste des filiere d'un diplomes  /rech etab
            if (window.loggedIn == 'rech_etab_presentattion_diplome' ||
                window.loggedIn == 'rech_etab_filieres' ||
               window.loggedIn == 'rech_etab_dossier_candidature' )
                return "client-vue/ipes/filiere_recherche_etab_head.html";
        
        
          else
        //     template head pour afficher la liste des filiere d'un diplomes  /rech ipes
            if (window.loggedIn == 'rech_ipes_presentation_diplome' ||
                window.loggedIn == 'rech_ipes_filieres' ||
               window.loggedIn == 'rech_ipes_dossier_candidature' )
                return "client-vue/ipes/filiere_recherche_ipes_head.html";
        
        
        
        
        
          else
        //     template head pour afficher la liste des filiere d'un diplomes / rech diplome
            if (window.loggedIn == 'rech_diplo_presentation_diplome' ||
                window.loggedIn == 'rech_diplo_filieres' ||
               window.loggedIn == 'rech_diplo_dossier_candidature' )
                return "client-vue/ipes/filiere_recherche_diplo_head.html";
        
        
        
        else
        //     template head pour afficher la liste des specialite d'une filieres 
            if (window.loggedIn == 'specialite' ||
                window.loggedIn == 'presentation_fielere' ||
                 window.loggedIn == 'tutelle')
                return "client-vue/ipes/specialite_head.html";
        
         else
        //     template head pour afficher la liste des specialite d'une filieres /recherche etab
            if (window.loggedIn == 'rech_etab_specialite' ||
                window.loggedIn == 'rech_etab_presentation_fielere' ||
                 window.loggedIn == 'rech_etab_tutelle')
                return "client-vue/ipes/specialite_recherche_etab_head.html";
        
        
            else
        //     template head pour afficher la liste des specialite d'une filieres /recherche ipes
            if (window.loggedIn == 'rech_ipes_specialite' ||
                window.loggedIn == 'rech_ipes_presentation_fielere' ||
                 window.loggedIn == 'rech_ipes_tutelle')
                return "client-vue/ipes/specialite_recherche_ipes_head.html";
        
        
        
        
        
        
         else
        //     template head pour afficher la liste des specialite d'une filieres /recherche diplome
            if (window.loggedIn == 'rech_diplo_specialite' ||
                window.loggedIn == 'rech_diplo_presentation_fielere' ||
                 window.loggedIn == 'rech_diplo_tutelle')
                return "client-vue/ipes/specialite_recherche_diplo_head.html";
        
        
         else
        //     template head pour afficher la liste des specialite d'une filieres /recherche filiere
            if (window.loggedIn == 'rech_filiere_specialite' ||
                window.loggedIn == 'rech_filiere_presentation_fielere' ||
                 window.loggedIn == 'rech_filiere_tutelle')
                return "client-vue/ipes/specialite_recherche_filiere_head.html";
        
        
        
        
        
         else
        //     template head pour afficher la liste des options d'une specialite 
            if (window.loggedIn == 'option' ||
                window.loggedIn == 'presentation_specialite' ||
                window.loggedIn == 'grille_enseignement' ||
                 window.loggedIn == 'programme_academiq')
                return "client-vue/ipes/option_head.html";
        
         else
        //     template head pour afficher la liste des options d'une specialite // recherche etab
            if (window.loggedIn == 'rech_etab_option' ||
                window.loggedIn == 'rech_etab_presentation_specialite' ||
                window.loggedIn == 'rech_etab_grille_enseignement' ||
                 window.loggedIn == 'rech_etab_programme_academiq')
                return "client-vue/ipes/option_rech_etab_head.html";
        
         else
        //     template head pour afficher la liste des options d'une specialite // recherche ipes
            if (window.loggedIn == 'rech_ipes_option' ||
                window.loggedIn == 'rech_ipes_presentation_specialite' ||
                window.loggedIn == 'rech_ipes_grille_enseignement' ||
                 window.loggedIn == 'rech_ipes_programme_academiq')
                return "client-vue/ipes/option_rech_ipes_head.html";
        
        
        
        
        
         else
        //     template head pour afficher la liste des options d'une specialite // recherche etab
            if (window.loggedIn == 'rech_diplo_option' ||
                window.loggedIn == 'rech_diplo_presentation_specialite' ||
                window.loggedIn == 'rech_diplo_grille_enseignement' ||
                 window.loggedIn == 'rech_diplo_programme_academiq')
                return "client-vue/ipes/option_rech_diplo_head.html";
        

 else
        //     template head pour afficher la liste des options d'une specialite // recherche etab
            if (window.loggedIn == 'rech_filiere_option' ||
                window.loggedIn == 'rech_filiere_presentation_specialite' ||
                window.loggedIn == 'rech_filiere_grille_enseignement' ||
                 window.loggedIn == 'rech_filiere_programme_academiq')
                return "client-vue/ipes/option_rech_filiere_head.html";
        




            else
            //appelle du template head les ipes/region
            if (
                    window.loggedIn === 'ipes_centre' ||
                    window.loggedIn === 'ipes_Adamaoua' ||
                    window.loggedIn === 'ipes_Est' ||
                    window.loggedIn === 'ipes_Extreme_Nord' ||
                    window.loggedIn === 'ipes_Littoral' ||
                    window.loggedIn === 'ipes_Nord' ||
                    window.loggedIn === 'ipes_Nord_Ouest' ||
                    window.loggedIn === 'ipes_Ouest' ||
                    window.loggedIn === 'ipes_Sud' ||
                    window.loggedIn === 'ipes_Sud_Ouest' ||
                    window.loggedIn === 'etablissement' ||
                    window.loggedIn === 'adresse_ipes' ||
                    window.loggedIn === 'agrement_ipes' ||
                    window.loggedIn === 'accueil')
                return "client-vue/ipes/ipes_head.html";


            else
            //appelle du template head pour les ippes all
            if (
                    window.loggedIn === 'ipes_centre_all' ||
                    window.loggedIn === 'ipes_Littoral_all' ||
                    window.loggedIn === 'ipes_Sud_Ouest_all' ||
                    window.loggedIn === 'ipes_Sud_all' ||
                    window.loggedIn === 'ipes_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_all' ||
                    window.loggedIn === 'ipes_Extreme_Nord_all' ||
                    window.loggedIn === 'ipes_Est_all' ||
                    window.loggedIn === 'ipes_Adamaoua_all' ||
                    window.loggedIn === 'etablissement_all' || //head etablissement dans la recherche d'etablissements
                    window.loggedIn === 'adresse_ipes_all' ||
                    window.loggedIn === 'agrement_ipes_all' ||
                    window.loggedIn === 'accueil_all')
                return "client-vue/ipes/ipes_all_head.html";



        }



        //appelle vers page  homeContent
        $scope.getContentTemplate = function()
        {

            //appelle vers page  homeContent
            //admin====================================================================================
            if (window.loggedIn === 'admin_region')
                return "admin-vue/admin.html";

            else
            if (window.loggedIn === 'admin_action')
                return "admin-vue/admin_action_content.html";

            // appelle template tutelle
            else
            if (window.loggedIn === 'ajouter_planing')
                return "admin-vue/ajouter_planing.html";


            //ajouter IPES
            else
            if (window.loggedIn === 'ajouter_ipes')
                return "admin-vue/ajouter_ipes.html";

            //ajouter adresse a un IPES
            else
            if (window.loggedIn === 'ajouter_adresse_ipes')
                return "admin-vue/ajouter_adresse_ipes.html";

            //ajouter quartier pour un IPES
            else
            if (window.loggedIn === 'ajouter_quartier_ipes')
                return "admin-vue/ajouter_quartier.html";
          
          else

//     template content pour afficher presentation d'un etablissements 
            if (window.loggedIn == 'presentation_etab' ||
                  window.loggedIn == 'presentation_recherche_etab' ||
                 window.loggedIn == 'rech_etab_presentation_etab'||
                 window.loggedIn == 'rech_ipes_presentation_etab')
                return "client-vue/ipes/presentation_etab.html";
        
        
          else

//     template content pour afficher liste des diplomes 
            if (window.loggedIn == 'diplome')
                return "client-vue/ipes/diplomes.html";
        
        
           else

//     template content pour afficher liste des diplomes /recherche etab
            if (window.loggedIn == 'rech_etab_diplome')
                return "client-vue/ipes/diplome_recherche_etab.html";
        
        
        //     template content pour afficher liste des diplomes /recherche ipes
            if (window.loggedIn == 'rech_ipes_diplome')
                return "client-vue/ipes/diplome_recherche_ipes.html";
        
        
                  else

//     template content pour afficher liste des filiere 
            if (window.loggedIn == 'filieres')
                return "client-vue/ipes/filieres.html";
        
        //     template content pour afficher liste des filiere /recherche etab
            if (window.loggedIn == 'rech_etab_filieres')
                return "client-vue/ipes/filieres_rech_etab.html";
            
             //     template content pour afficher liste des filiere /recherche IPES
            if (window.loggedIn == 'rech_ipes_filieres')
                return "client-vue/ipes/filieres_rech_ipes.html";
            
            
            
            
            
            
        
        
        //     template content pour afficher liste des filiere /recherche diplo
            if (window.loggedIn == 'rech_diplo_filieres')
                return "client-vue/ipes/filieres_rech_diplo.html";
        
        
        
        else
         //     template content pour afficher liste des piece a fournir pour candidature / recherche etab
            if (window.loggedIn == 'rech_etab_dossier_candidature')
                return "client-vue/ipes/dossier_candidature_rech_etab.html";
        
            else
         //     template content pour afficher liste des piece a fournir pour candidature / recherche ipes
            if (window.loggedIn == 'rech_ipes_dossier_candidature')
                return "client-vue/ipes/dossier_candidature_rech_ipes.html";
        
        
        
        
         else
         //     template content pour afficher liste des piece a fournir pour candidature / recherche diplome
            if (window.loggedIn == 'rech_diplo_dossier_candidature')
                return "client-vue/ipes/dossier_candidature_rech_diplo.html";
        
        
         else
         //     template content pour afficher liste des piece a fournir pour candidature 
            if (window.loggedIn == 'dossier_candidature')
                return "client-vue/ipes/dossier_candidature.html";
        
        
        
        
          else
         //     template content pour afficher liste des specialite d'une filiere 
            if (window.loggedIn == 'specialite')
                return "client-vue/ipes/specialite.html";
        
        
        
          else
         //     template content pour afficher liste des specialite d'une filiere / recherche etab
            if (window.loggedIn == 'rech_etab_specialite')
                return "client-vue/ipes/specialite_rech_etab.html";
        
         else
         //     template content pour afficher liste des specialite d'une filiere / recherche ipes
            if (window.loggedIn == 'rech_ipes_specialite')
                return "client-vue/ipes/specialite_rech_ipes.html";
        
        
         else
         //     template content pour afficher liste des specialite d'une filiere / recherche etab
            if (window.loggedIn == 'rech_diplo_specialite')
                return "client-vue/ipes/specialite_rech_diplo.html";
        
          else
         //     template content pour afficher liste des specialite d'une filiere / recherche filiere
            if (window.loggedIn == 'rech_filiere_specialite')
                return "client-vue/ipes/specialite_rech_filiere.html";
        
        
        
         
          else

//     template content pour afficher presentation d'un diplomes 
            if (window.loggedIn == 'presentattion_diplome' ||
                  window.loggedIn == 'rech_etab_presentattion_diplome' ||
                  window.loggedIn == 'rech_ipes_presentation_diplome')
                return "client-vue/ipes/presentation_diplome.html";
        
        
        
         else

//     template content pour afficher presetatio d'un diplomes 
            if (window.loggedIn == 'rech_diplo_presentation_diplome')
                return "client-vue/ipes/presentation_rech_diplome.html";
        
     else
        //     template content pour afficher la presentation d'une filieres 
            if (window.loggedIn == 'presentation_fielere' ||
                 window.loggedIn == 'rech_etab_presentation_fielere'||
                 window.loggedIn == 'rech_ipes_presentation_fielere')
                return "client-vue/ipes/presentation_filiere.html";
        
         else
        //     template content pour afficher la presentation d'une filieres 
            if (window.loggedIn == 'rech_diplo_presentation_fielere')
                return "client-vue/ipes/presentation_rech_diplo_filiere.html";
        
        
         else
        //     template content pour afficher la presentation d'une filieres 
            if (window.loggedIn == 'rech_filiere_presentation_fielere')
                return "client-vue/ipes/presentation_rech_filiere_filiere.html";
        
        
         else
        //     template content pour afficher la tutelle d'une filieres 
            if (window.loggedIn == 'tutelle')
                return "client-vue/ipes/tutelle.html";
        
        
          else
        //     template content pour afficher la tutelle d'une filieres /recherche etab
            if (window.loggedIn == 'rech_etab_tutelle')
                return "client-vue/ipes/tutelle_rech_etab.html";
        
          else
        //     template content pour afficher la tutelle d'une filieres /recherche ipes
            if (window.loggedIn == 'rech_ipes_tutelle')
                return "client-vue/ipes/tutelle_rech_ipes.html";
        
        
        
        
        
         else
        //     template content pour afficher la tutelle d'une filieres /recherche filiere
            if (window.loggedIn == 'rech_diplo_tutelle')
                return "client-vue/ipes/tutelle_rech_diplo.html";
        
           else
        //     template content pour afficher la tutelle d'une filieres /recherche diplome
            if (window.loggedIn == 'rech_filiere_tutelle')
                return "client-vue/ipes/tutelle_rech_filiere.html";
        
        
           else
        //     template content pour afficher la liste des options d'une specialite 
            if (window.loggedIn == 'option')
                return "client-vue/ipes/option.html";
        
          else
        //     template content pour afficher la liste des options d'une specialite /recherche etab
            if (window.loggedIn == 'rech_etab_option')
                return "client-vue/ipes/option_rech_etab.html";
        
           else
        //     template content pour afficher la liste des options d'une specialite /recherche ipes
            if (window.loggedIn == 'rech_ipes_option')
                return "client-vue/ipes/option_rech_ipes.html";
        
         else
        //     template content pour afficher la liste des options d'une specialite /recherche diplo
            if (window.loggedIn == 'rech_diplo_option')
                return "client-vue/ipes/option_rech_diplo.html";
        
          else
        //     template content pour afficher la liste des options d'une specialite /recherche filiere
            if (window.loggedIn == 'rech_filiere_option')
                return "client-vue/ipes/option_rech_filiere.html";
        
        
        
        
        
          else
        //     template content pour afficher la grille des enseignements d'une specialite 
            if (window.loggedIn == 'grille_enseignement')
                return "client-vue/ipes/grille_enseignement.html";
        
        else
        //     template content pour afficher la grille des enseignements d'une specialite /recherche etab
            if (window.loggedIn == 'rech_etab_grille_enseignement')
                return "client-vue/ipes/grille_enseignement_rech_etab.html";
        
            
        else
        //     template content pour afficher la grille des enseignements d'une specialite /recherche ipes
            if (window.loggedIn == 'rech_ipes_grille_enseignement')
                return "client-vue/ipes/grille_enseignement_rech_ipes.html";
        
         else
        //     template content pour afficher la grille des enseignements d'une specialite /recherche diplo
            if (window.loggedIn == 'rech_diplo_grille_enseignement')
                return "client-vue/ipes/grille_enseignement_rech_diplo.html";
        
        
          else
        //     template content pour afficher la grille des enseignements d'une specialite /recherche filiere
            if (window.loggedIn == 'rech_filiere_grille_enseignement')
                return "client-vue/ipes/grille_enseignement_rech_filiere.html";
        
        
          else
        //     template content pour afficher le planing academique d'une specialite / recherche etab
            if (window.loggedIn == 'rech_etab_programme_academiq')
                return "client-vue/ipes/programme_academique_rech_etab.html";
        
        
          else
        //     template content pour afficher le planing academique d'une specialite / recherche ipes
            if (window.loggedIn == 'rech_ipes_programme_academiq')
                return "client-vue/ipes/programme_academique_rech_ipes.html";
        
        
         else
        //     template content pour afficher le planing academique d'une specialite / recherche etab
            if (window.loggedIn == 'rech_diplo_programme_academiq')
                return "client-vue/ipes/programme_academique_rech_diplo.html";
        
         else
        //     template content pour afficher le planing academique d'une specialite / recherche filiere
            if (window.loggedIn == 'rech_filiere_programme_academiq')
                return "client-vue/ipes/programme_academique_rech_filiere.html";
        
        
        
         else
        //     template content pour afficher le planing academique d'une specialite 
            if (window.loggedIn == 'programme_academiq')
                return "client-vue/ipes/programme_academique.html";
        
        
          
        
        else
        //     template content presentation d'une specialite 
            if (window.loggedIn == 'presentation_specialite' ||
                   window.loggedIn == 'rech_etab_presentation_specialite' ||
                   window.loggedIn == 'rech_ipes_presentation_specialite')
                return "client-vue/ipes/presentation_specialite.html";

 else
        //     template content presentation d'une specialite 
            if (window.loggedIn == 'rech_diplo_presentation_specialite' )
                return "client-vue/ipes/presentation_rech_diplo_specialite.html";

 else
        //     template content presentation d'une specialite 
            if (window.loggedIn == 'rech_filiere_presentation_specialite' )
                return "client-vue/ipes/presentation_rech_filiere_specialite.html";



            //ajouter etablissement
            else
            if (window.loggedIn === 'add_etabissement')
                return "admin-vue/ajouter_etabissement.html";

            //ajouter diplome
            else
            if (window.loggedIn === 'add_diplome')
                return "admin-vue/ajouter_diplome.html";

            //ajouter filiere
            else
            if (window.loggedIn === 'add_filiere')
                return "admin-vue/ajouter_filiere.html";


            //ajouter specialite
            else
            if (window.loggedIn === 'add_specialite')
                return "admin-vue/ajouter_specialite.html";

            //ajouter piece candidature
            else
            if (window.loggedIn === 'add_piece')
                return "admin-vue/ajouter_piece.html";
            //turn "admin-vue/ajouter_planing.html";

            //ajouter semestre
            else
            if (window.loggedIn === 'add_semestre')
                return "admin-vue/ajouter_semestre.html";


            //ajouter option
            else
            if (window.loggedIn === 'add_option')
                return "admin-vue/ajouter_option.html";


 //ajouter programme académique
            else
            if (window.loggedIn === 'add_programme_academique')
                return "admin-vue/ajouter_programme_académique.html";





            // finajouter annonce
            else
            if (window.loggedIn === 'ajouter_annonce')
                return "admin-vue/ajouter_annonce.html";





            //fin admin=================================================================


            // client home page=============================================================

            //appelle du template contetnt home
            if (window.loggedIn === 'home')
                return "homeContent.html";
            else
            //appelle du template contetnt liste regon
            if (window.loggedIn === 'region')
                return "client-vue/region.html";
            //appelle template content de la liste des ipes par region        

            else

            if (window.loggedIn === 'liste_ipes_region')
                return "client-vue/ipes/index_liste_ipes.html";
            else

            // template action content differee         
            if (window.loggedIn === 'action')
                return "client-vue/Action_content.html";
        
        
         else

            // template action recherche etablissemets         
            if (window.loggedIn === 'recherche_etablissements')
                return "client-vue/recherche_etab.html";
        
        
        else

            // template action recherche diplome         
            if (window.loggedIn === 'recherche_diplome')
                return "client-vue/recherche_diplome.html";
        
        else

            // template action recherche filiere         
            if (window.loggedIn === 'recherche_filiere')
                return "client-vue/recherche_filiere.html";
        
        
            else
//            template content recherche Ipes  de actions différées         
            if (window.loggedIn === 'recherhce')
                return "client-vue/recherche_ipes.html";
            else

            //     template content envoyer message a un Ipes        
            if (window.loggedIn === 'envoyer')
                return "client-vue/envoi_message.html";
            else

            //     template content lire annonce d'un Ipes        
            if (window.loggedIn === 'lire_annonce')
                return "client-vue/lire_annonce.html";
            else

            //    template content pour creer un compte Ipes        
            if (window.loggedIn === 'compte')
                return "compte_Content.html";
            else
            // fin client home page=============================================================


            // ipes home page=============================================================




            //gestion ipes

            //appelle du template content ipes choisie
            if (window.loggedIn === 'ipes_centre' ||
                    window.loggedIn === 'ipes_Adamaoua' ||
                    window.loggedIn === 'ipes_Est' ||
                    window.loggedIn === 'ipes_Extreme_Nord' ||
                    window.loggedIn === 'ipes_Littoral' ||
                    window.loggedIn === 'ipes_Nord' ||
                    window.loggedIn === 'ipes_Nord_Ouest' ||
                    window.loggedIn === 'ipes_Ouest' ||
                    window.loggedIn === 'ipes_Sud' ||
                    window.loggedIn === 'ipes_Sud_Ouest' ||
                    window.loggedIn === 'ipes_centre_all' ||
                    window.loggedIn === 'ipes_Littoral_all' ||
                    window.loggedIn === 'ipes_Sud_Ouest_all' ||
                    window.loggedIn === 'ipes_Sud_all' ||
                    window.loggedIn === 'ipes_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_Ouest_all' ||
                    window.loggedIn === 'ipes_Nord_all' ||
                    window.loggedIn === 'ipes_Extreme_Nord_all' ||
                    window.loggedIn === 'ipes_Est_all' ||
                    window.loggedIn === 'ipes_Adamaoua_all'
                    )
                return "client-vue/ipes/ipes.html";

            else

            //appelle template content liste etablissement d'un ipes
            if (window.loggedIn === 'etablissement')
                return "client-vue/ipes/etablissements.html";

   else

            //appelle template content liste etablissement d'un ipes
            if (window.loggedIn === 'etablissement_all')     //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/etablissements_rech_ipes.html";





            //appelle template presentation ipes : accueil
            else

            if (window.loggedIn === 'accueil')
            {
                return "client-vue/ipes/ipes.html";
            }
            //appelle template presentation ipes_all : accueil
            else

            if (window.loggedIn === 'accueil_all')
            {
                return "client-vue/ipes/ipes.html";
            }

            else
            //appelle template content adresse d'un ipes
            if (window.loggedIn === 'adresse_ipes')  
                return "client-vue/ipes/adresse.html";


  else
            //appelle template content adresse d'un ipes
            if (window.loggedIn === 'adresse_ipes_all')  //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/adresse_rech_ipes.html";





            else
            //appelle template content adresse d'un ipes
            if (window.loggedIn === 'agrement_ipes') 
                return "client-vue/ipes/agrement.html";


   else
            //appelle template content adresse d'un ipes
            if ( window.loggedIn === 'agrement_ipes_all')  //content etablissement dans la recherche des etablissement et par region
                return "client-vue/ipes/agrement_rech_ipes.html";



            //fin appelle du template content ipes
            //fin gestion ipes


        };

        // fin ipes home page=============================================================

    }]).controller('Home_traitement', ['$scope', 'service_AddCompte', 'service_connexion_user', function($scope, service_AddCompte, service_connexion_user)

    {
        var postData = {};

        $scope.loader = {
            loading: false,
        };


        //addCompte est la fonction qui permet d'ajouter un utilisateur
        $scope.addCompte = function()
        {

            postData.pays = $scope.pays;
            postData.nom_user = $scope.nom_user;
            postData.pwd = $scope.pwd;
             postData.pwd2 = $scope.pwd2;
            postData.telephone = $scope.telephone;
            postData.email = $scope.email;
            postData.sexe = $scope.sexe;

            service_AddCompte.serverRequest(postData, $scope);

        },
                // fin addCompte 

                //connexionUtilisateur est la fonction qui permet de verifier les compte de connexion

                $scope.connexionUtilisateur = function()
                {
                    var postData_con = {};


                    postData_con.tel = $scope.tel;
                    postData_con.pwd_user = $scope.pass;
//                    httpInterceptor.request();

                    $scope.loader.loading = true;

                    service_connexion_user.serverRequest(postData_con, $scope);
//    

                    $scope.tel = '';
                    $scope.pass = '';


                },
                // fin connexionUtilisateur

                $scope.compte_user = function()
                {
                    window.loggedIn = "compte";

                };




    }]);