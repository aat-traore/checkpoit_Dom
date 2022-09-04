/*var element = document.getElementById("plus");


var element = document.getElementById("moins");

element.addEventListener("click", function() {

    var value = document.querySelector('#rem')
    var inputValue = document.querySelector('#rem').value

    inputValue--;
    value.setAttribute("value", inputValue)
    
});

function PrixPartiel(prixvalue,inputValue){

    return prixvalue*inputValue
}

*/

var parentButton = document.querySelectorAll(".card-footer");

var ElementPrix = document.querySelectorAll(".text-center");
let chanmpPrix = document.querySelectorAll(".text-center > span");
//console.log(parentButton);

for (let i = 0; i < parentButton.length; i++) {
  //recuperation des elements en commun
  let PrixInput = ElementPrix[i].children[1];
  let PrixDefault = parseInt(PrixInput.innerText);
  //console.log(PrixDefault + 2300);
  let inputQuantity = parentButton[i].children[1];
  let qte = inputQuantity.value;

  // function permet d'aimer une article
  let like = ElementPrix[i].children[2];
  like.addEventListener("click", aimer);
  function aimer() {
    like.style.color = "red";
  }
  // fonction pour incrémenter et la somme selon le nombre d'article achetés
  let btnPlus = parentButton[i].children[2];
  btnPlus.addEventListener("click", increment);
  //prixtotal = parseInt(PrixInput.innerHTML);
  function increment() {
    qte++;
    inputQuantity.setAttribute("value", qte);
    PrixInput.innerHTML = qte * PrixDefault;

  
  }

  // fonction  pour desincrementer
  let btnMoins = parentButton[i].children[0];
  btnMoins.addEventListener("click", desincrement);
  function desincrement() {
    if (qte <= 1) {
      qte = 1;
    }
    qte--;
    inputQuantity.setAttribute("value", qte);
    PrixInput.innerHTML = qte * PrixDefault;
  
  }
}

//function pour supprimer un article du panier
let btnremove = document.querySelectorAll(".fa-trash-can");
for (let i = 0; i < btnremove.length; i++) {
  btnremove[i].addEventListener("click", supprimer);

  function supprimer() {
    btnremove[i].parentElement.remove();
  }
}

// fonction qui permet de calculer la totale des articles
function somme(data) {
  var sum = 0;
  for (let i = 0; i < data.length; i++) {
    var inputQuantity = parentButton[i].children[1];
    let qte = inputQuantity.value;
    let PrixInput = ElementPrix[i].children[1];
    let PrixDefault = parseInt(PrixInput.innerText);
  
   
   let s= qte*PrixDefault;
    sum += s;
  }
  //console.log(sum);
  return sum;
}

var total=somme(parentButton)

document.querySelector('input[name="total"]').value = total

//let toutevaleur=document.querySelectorAll('.text-center > span')
//let mot=parseInt(toutevaleur)
//mot=toutevaleur
//console.log(mot)

//let totaux = document.querySelector("#totaux").value;

//console.log(valeurchamp)

//let inputtotal = document.querySelector(".totaux ").value;

//let toutevaleur=document.querySelectorAll('.text-center > span').value
//let mot=parseInt(toutevaleur)
//mot=toutevaleur
//console.log(mot)
// let sum=0;
//sum+=prixtotal

//let arr=[prixtotal]
// arr.reduce(prixtotal)
//console.log(arr)

//function sum_reducer(accumulator, currentValue) {
//return accumulator + currentValue;
// }

// let sum = arr.reduce(sum_reducer);
// let calcul=[]
//for(let n=0; n<PrixInput.innerHTML.length;n++){
//prixtotal=parseInt(PrixInput.innerHTML)
// calcul.reduce(prixtotal)
