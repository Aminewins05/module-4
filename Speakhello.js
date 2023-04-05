// ÉTAPE 2 : Enveloppez tout le contenu de SpeakHello.js dans un IIFE
// Voir leçon 52, partie 2
( fonction  ( fenêtre )  {
  // ETAPE 3 : Créez un objet, nommé 'helloSpeaker' auquel vous vous attacherez
  // la méthode "speak" et que vous exposerez au contexte global
  // Voir leçon 52, partie 1
  var  bonjourHaut-parleur  =  { } ;

  // NE PAS attacher la variable speakWord à l'objet 'helloSpeaker'.
  var  speakWord  =  "Bonjour" ;

  // ÉTAPE 4 : Réécrivez la fonction 'speak' de sorte qu'elle soit attachée à la
  // objet helloSpeaker au lieu d'être une fonction autonome.
  // Voir leçon 52, partie 2

  bonjour l'intervenant . parler  =  fonction  ( nom )  {
    consoler . log ( speakWord  +  " "  +  nom ) ;
  } ;

  fenêtre . bonjourHaut-parleur  =  bonjourHaut-parleur ;
  // ÉTAPE 5 : Exposez l'objet 'helloSpeaker' à la portée globale. Nomme le
  // 'helloSpeaker' sur la portée globale également.
  // Voir leçon 52, partie 2
  // (Remarque, l'étape 6 sera effectuée dans le fichier SpeakGoodBye.js.)
  // xxxx.xxxx = helloSpeaker ;
} ) ( fenêtre ) ;
