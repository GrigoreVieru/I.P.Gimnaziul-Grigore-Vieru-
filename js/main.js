//initializam elementele din galerie sa fie clickabile
new SimpleLightbox({elements:".galerie-container a"})

new SimpleLightbox({elements:".orar-imagini a"})

AOS.init();

emailjs.init("Mf_45oK4QZRavIQqx");

function mobileMenu(){
     var x = document.getElementById("navbar")

     if (x.className === ""){
        x.className = "mobile"
     }
     else{
        x.className = "";
     }
}



function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var data = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_2br8r2o", "template_gn7k9ld", data)
       .then(function (response) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}

