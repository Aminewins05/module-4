// NOTE! Les étapes de ce fichier sont fondamentalement identiques à celles que vous
// exécuté dans le fichier SpeakHello.js.

// ÉTAPE 6 : Enveloppez tout le contenu de SpeakGoodBye.js dans un IIFE
// Voir leçon 52, partie 2
( fonction  ( fenêtre )  {
  // ETAPE 7 : Créez un objet, nommé 'byeSpeaker' auquel vous vous attacherez
  // la méthode "speak" et que vous exposerez au contexte global
  // Voir leçon 52, partie 1
  var  byeSpeaker  =  { } ;

  // NE PAS attacher la variable speakWord à l'objet 'byeSpeaker'.
  var  speakWord  =  "Au revoir" ;

  // ÉTAPE 8 : réécrivez la fonction 'speak' de sorte qu'elle soit attachée à la
  // objet byeSpeaker au lieu d'être une fonction autonome.
  // Voir leçon 52, partie 2
  byeSpeaker . parler  =  fonction  ( nom )  {
    consoler . log ( speakWord  +  " "  +  nom ) ;
  } ;

  // ÉTAPE 9 : Exposez l'objet 'byeSpeaker' à la portée globale. Nomme le
  // 'byeSpeaker' sur la portée globale également.
  fenêtre . byeSpeaker  =  byeSpeaker ;
} ) ( fenêtre ) ;
