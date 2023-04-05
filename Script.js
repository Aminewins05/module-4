// ********************************
// COMMENCEZ ICI SI VOUS VOULEZ UN POINT DE DÉPART PLUS DIFFICILE POUR CETTE MISSION
// ********************************
//
// Instructions d'affectation du module 4.
//
// L'idée de cette affectation est de prendre un tableau existant de noms
// puis affichez Hello 'Name' ou Good Bye 'Name' sur la console.
// Le programme doit dire "Bonjour" à n'importe quel nom sauf les noms qui commencent par un "J"
// ou "j", sinon, le programme devrait dire "Au revoir". Ainsi, la sortie finale
// sur la console devrait ressembler à ceci :
/*
Bonjour Yaakov
Au revoir Jean
Au revoir Jen
Au revoir Jason
Salut Paul
Bonjour Franck
Bonjour Larry
Bonjour Paula
Bonjour Laura
Au revoir Jim
AVERTISSEMENT!!! AVERTISSEMENT!!!
Le code ne fonctionne PAS actuellement ! C'est VOTRE travail de le faire fonctionner
tel que décrit dans les exigences et les étapes pour remplir ce
mission.
AVERTISSEMENT!!! AVERTISSEMENT!!!
*/

// ÉTAPE 1:
// Enveloppe tout le contenu de script.js à l'intérieur d'un IIFE
// Voir leçon 52, partie 2
// (Remarque, l'étape 2 sera effectuée dans le fichier SpeakHello.js.)

( fonction  ( fenêtre )  {
   noms  de variables =  [
    "Yaakov" ,
    "Jean" ,
    "Jen" ,
    "Jason" ,
    "Paul" ,
    "Franc" ,
    "Larry" ,
    "Paula" ,
    "Laura" ,
    " Jim " ,
  ] ;

  // ÉTAPE 10 :
  // Bouclez sur le tableau des noms et dites 'Hello' ou "Good Bye"
  // en utilisant la méthode 'speak' ou helloSpeaker's ou byeSpeaker's
  // Méthode 'parler'.
  // Voir Conférence 50, partie 1
  for  ( var  nombre  =  0 ;  nombre  <  noms . longueur ;  nombre ++ )  {
    // ÉTAPE 11 :
    // Récupère la première lettre du nom courant dans la boucle.
    // Utilise la fonction 'charAt' de l'objet chaîne. Puisque nous recherchons
    // les noms commençant par 'J'/'j' en majuscule ou en minuscule, appellent
    // la méthode 'toLowerCase' de l'objet de chaîne sur le résultat afin que nous puissions comparer
    // au caractère 'j' en minuscules par la suite.
    // Recherchez ces méthodes sur le site Web de Mozilla Developer Network si nécessaire.
    //console.log(noms[nombre]);
    var  firstLetter  =  noms [ compte ] . charAt ( 0 ) . toLowerCase ( ) ;

    // ÉTAPE 12 :
    // Compare la 'premièreLettre' récupérée à l'ÉTAPE 11 en minuscules
    // 'j'. Si c'est le cas, appelez la méthode 'speak' de byeSpeaker avec le nom actuel
    // dans la boucle. Sinon, appelez la méthode 'speak' de helloSpeaker avec le courant
    // nom dans la boucle.
    si  ( premièreLettre  ==  "j" )  {
      byeSpeaker . parler ( noms [ compter ] ) ;
    }  sinon  {
      bonjour l'intervenant . parler ( noms [ compter ] ) ;
    }
  }
} ) ( fenêtre ) ;
