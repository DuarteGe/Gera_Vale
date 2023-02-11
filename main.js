var singular = new Array('Voadora', 'Soco',
'Lambida',
'Rasteira',
'Gato',
'Doguinho',
'Min. de porrada sem perder a amizade',
'Pastel',
'Gabiru',
'Par de Chifre',
'Dedada',
'Cafuné',
'Xícara de Café',
'Cheiro no Cangote',
'Tapa')

var plural = new Array('Voadoras', 'Socos',
'Lambidas',
'Rasteiras',
'Gatos',
'Doguinhos',
'Min. de porrada sem perder a amizade',
'Pastéis',
'Gabirus',
'Pares de Chifres',
'Dedadas',
'Cafunés',
'Xícaras de Café',
'Cheiros no Cangote',
'Tapas')



function evento(){
document.getElementById("btn").addEventListener("click", gera)
}

document.addEventListener("load", evento)

var text = document.getElementById('texto')

var sortSing = singular[Math.floor((Math.random()*singular.length))]

var sortPlur = plural[Math.floor((Math.random()*plural.length))]


var quantidade = Math.floor((Math.random()*(10-1)+1))

var div = document.getElementById('vale')


function gera(){
  
  
  text.innerHTML = '<strong>Parabéns! Você acaba de ganhar um:</strong>'
  
  if(quantidade==1){
  div.innerHTML = `Vale ${sortSing}`
  }
  else{
    div.innerHTML = `Vale ${quantidade} ${sortPlur}`
    
  }
}