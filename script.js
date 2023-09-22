"use strict";

/**         Fonction
 * 
 * 
 * Declarer trois variables a="jean" et b="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let aQ="jean";
let bBis="Paul";
let result=checkName(a,b)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);








//fonction sans parametre

function saluer(){ 
    console.log("bonjour et bienvenue");
}

saluer(); //pour enclencher l'action

//fonction avec parametre
function saluerQqn(bouba){
    console.log(" Bonjour et bienvenue mr "+ bouba);
}

saluerQqn("Bouba");
let pseudo= "bobby";
saluerQqn(pseudo);