ipescam.controller('head_Controler', ['$scope', function($scope)

    {
        $scope.title = 'Connexion';
        $scope.title_region = 'Région';
 
        $scope.aller = function()
        {
            // window.loggedIn = 'region';
        }

        //  appelle template action differees
        $scope.ActionDifferees = function()
        {
            // alert('tokus');
            window.loggedIn = 'action';
        }
        // fin template recherche

        //deconnexion sur template region

        $scope.deconnexion = function()
        {
            window.loggedIn = 'home';
        }
        //fin deconnexion sur template region

        // retourne a la liste des Region
        $scope.region = function()
        {
            window.loggedIn = 'region';
        }
        
        
         // retourne a la liste des Region
        $scope.ipes_region = function()
        {
            window.loggedIn = 'liste_ipes_region';
        }
        
          // retourne a la liste des Region
        $scope.recherche_etab = function()
        {
            window.loggedIn = 'recherche_etablissements';
        }
        
        
            // retourne a la liste des Region
        $scope.recherche_ipes = function()
        {
            window.loggedIn = 'etablissement_all';
        }
        
        
         // retourne a la liste des filieres
        $scope.filiere = function()
        {
            window.loggedIn = 'filieres';
        }
        
           // retourne a la liste des filieres
        $scope.filiere_rech_etab = function()
        {
            window.loggedIn = 'rech_etab_filieres';
        }
        
             // retourne a la liste des filieres
        $scope.filiere_rech_ipes = function()
        {
            window.loggedIn = 'rech_ipes_filieres';
        }
        
        
            // retourne a la liste des filieres
        $scope.filiere_rech_diplo = function()
        {
            window.loggedIn = 'rech_diplo_filieres';
        }
        
             // retourne a la liste des filieres
        $scope.filiere_rech_filiere = function()
        {
            window.loggedIn = 'recherche_filiere';
        }
        
          // retourne a la liste des specialite
        $scope.specialite = function()
        {
            window.loggedIn = 'specialite';
        }
        
           // retourne a la liste des specialite
        $scope.specialite_rech_etab = function()
        {
            window.loggedIn = 'rech_etab_specialite';
        }
        
             // retourne a la liste des specialite
        $scope.specialite_rech_ipes = function()
        {
            window.loggedIn = 'rech_ipes_specialite';
        }
        
        
             // retourne a la liste des specialite
        $scope.specialite_rech_diplo = function()
        {
            window.loggedIn = 'rech_diplo_specialite';
        }
        
              // retourne a la liste des specialite
        $scope.specialite_rech_filiere = function()
        {
            window.loggedIn = 'rech_filiere_specialite';
        }
        
          // retourne a la liste des diplomes
        $scope.diplomes_etab = function()
        {
            window.loggedIn = 'diplome';
        }
        
          // retourne a la liste des diplomes
        $scope.diplomes_rech_etab = function()
        {
            window.loggedIn = 'rech_etab_diplome';
        }
        
            // retourne a la liste des diplomes
        $scope.diplomes_rech_ipes = function()
        {
            window.loggedIn = 'rech_ipes_diplome';
        }
        
        
        
        
           // retourne a la liste des diplomes
        $scope.diplomes_rech_diplo = function()
        {
            window.loggedIn = 'recherche_diplome';
        }
        
        
           // retourne a la liste des etablissements
        $scope.etablissements = function()
        {
           window.loggedIn = 'etablissement';
         
        }
        
            // retourne a la liste des etablissements sur fenetre coté action differe
        $scope.list_etablissements = function()
        {
           window.loggedIn = 'recherche_etablissements';
         
        }
        
        
        
          // retourne a la liste de tous les ipes
        $scope.ipes_region_all = function()
        {
             window.loggedIn = 'recherhce';
        }
        
        // fin retourne a la liste des Region  
   
 

  }]);
