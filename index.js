//en complement de javascript06,38,39 
//aller chercher la value ds un objet qui est deja ds un objet 

let monObjet = {
    nom: "robert",
    prenom: "pires",
    mensuration: {
        taille: "1.73m",
        tour_de_taille: "92",
        IMC: 25.55,
        pied: {
        accessoires :"chaussures de foot",
    },
},

test: function test (a) {
    console.log(`je suis un ${a}`);
}
};

//METHODE pour acceder aux valeurs de l objet
console.log(monObjet);
console.log(monObjet.mensuration.taille);
console.log(monObjet["nom"]);
console.log(monObjet["mensuration"]["IMC"]);
console.log(monObjet.mensuration.pied.accessoires);


//Acceder a la methode

monObjet.test("dev");
console.log(monObjet.test);

//faire une iteration sur l objet    
for (element in monObjet.mensuration.pied) {
console.log(`son ${element} est ${monObjet.mensuration.pied[element]} `);
};

//ajouter une propriete (paire clé/valeur) dans l objet  

Object.defineProperty(monObjet, "loisirs", {
    value:"foot",                               //-> rajoute loisirs et la value a l objet
});

//autre methode 

monObjet.age = 29;

console.log(monObjet);

//ecraser la value d une key 

monObjet.age = 50;
console.log(monObjet);