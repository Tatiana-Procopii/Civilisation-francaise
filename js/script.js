emailjs.init("user_vFbROt1l9IOkMhIJlnDG7");

var date = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
};

function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }
    emailjs.send("service_e1h7f8b","template_7hfdzfb", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
            console.log(error);
        })
}