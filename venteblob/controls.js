const form = document.getElementById("form")
const grades = ["admin", "User"]


class NewCustomer {
    constructor(nom, prenom, age, grade, email,adresse,phone,password) {
        
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.grade = grade
        this.adresse = adresse
        this.email = email
        this.phone = phone
        this.password = password
    }
}

function create(identite,nom, prenom, age, email,grade, adresse, phone,password) {
    if (!parseInt(identite)) 
        throw(new Error("Identité non numérique"))
    
    
    if (! nom.match(/[A-Z a-z]/)) 
        throw(new Error("le nom ne doit contenir que des lettres et des espaces"))
    if (nom.length<=3) 
        throw(new Error("le nom doit être >3 caractères"))
    
    if (! prenom.match(/[A-Z a-z]/)) 
        throw(new Error("le prénom ne doit contenir que des lettres et des espaces"))
    
    
    if (!parseInt(age))  //isNAN(age)
        throw(new Error("l'age doit être numérique"))
    
    if (age < 20) 
        throw(new Error("l'age doit être supérieur à 20 ans"))

    if (! email.match(/[A-Z a-z]/)) 
    throw(new Error("le nom ne doit contenir que des lettres et des espaces"))

    if (email.length<=10) 
        throw(new Error("le nom doit être >10 caractéres"))

    if (adresse.length < 20) 
        throw(new Error("l'Adresse doit être de 20 caractéres au mois"))
    
    if (! adresse.match(/[ ]/)) 
        throw(new Error("l' adresse doit comporter au moins un espace"))
    
    if (! phone.match(/[0-9][0-9][0-9][0-9]/)) 
    throw(new Error("le nom ne doit contenir que des chiffres numéro français"))

    if (! grades.includes(grade.toLowerCase())) 
        throw(new Error("la grade doit être correcte"))

    if (! password.match(/[A-Za-z]/)) 
    throw(new Error("le password  doit contenir que des lettres et des chiffres"))
    if (password.length<=10) 
        throw(new Error("le nom doit être >10 caractères"))
    
    new NewCustomer( identite, nom, prenom, age, grade, email, adresse, phone,password)
    
}
if(form){
    form.addEventListener('click', create, false);
  }
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("soumission");
    const identite = document.getElementById("identite").value
    const nom = document.getElementById("nom").value
    const prenom = document.getElementById("prenom").value
    const age = document.getElementById("age").value
    const adresse = document.getElementById("adresse").value
    const email = document.getElementById("email").value
    const grade = document.getElementById("grade").value
    const phone = document.getElementById("phone").value
    const password = document.getElementById("password").value
   
      

    try {
        create(identite, nom, prenom, age, grade, email, adresse,phone,password)
        document.getElementById("message").innerHTML = `<div class='alert alert-success' role='alert'>valide</div>`;
    } catch (err) {
        document.getElementById("message").innerHTML = `<div class='alert alert-danger' role='alert'>${err}</div>`;
        console.log(err);
    }
})
