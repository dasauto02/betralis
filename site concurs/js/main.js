new SimpleLightbox({elements: '.container-galerie a' });

emailjs.init("2VQ-pr7A2o81w78oQ");

function send() {

if (document.getElementById("formular").checkValidity() ==false){
    document.getElementById("formular").reportValidity(); return; 

}

var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value, 
    mesaj: document.getElementById("mesaj").value,
    service: document.getElementById("service").value
};

emailjs.send("service_j7bjs5c","template_nuw1euf", date)
     .then(function (raspuns) {
        alert("Mesajul a fost transmis.")
        document.getElementById("formular").reset(); 
     }, function (error) {
       alert("Eroare la transmitere. Contactati programatorul.")
    })
}

document.addEventListener('click', function(event) {
    var isClickInsideMenu = menu.contains(event.target);
    if (!isClickInsideMenu) {
        menu.style.display = 'none';
    }
});
