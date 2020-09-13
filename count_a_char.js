function countB(valeur){
 s = 'b', i = 0;
 c = s.toUpperCase();
 var nbre = 0;
 var size = valeur.length;
 while(nbre < size){
  if(valeur[nbre].toUpperCase() === c){
    i++;
  }
   nbre++;
 }
  return "nombre de B :" + i;
}
countB('BmklBB');
