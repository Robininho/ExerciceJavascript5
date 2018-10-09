var name = prompt('Entrez votre nom :');

if(/^[a-zA-ZÂÊÎÔÛÄËÏÖÜÀÆæÇÉÈŒœÙ\s-]+$/.test(name)){
//On affiche Bonjour suivi du nom
  alert('Bonjour '+ name);
}

else{
//on affiche un message d'érreur
  alert("Oula tu n'as pas bien saisis le message");
}
