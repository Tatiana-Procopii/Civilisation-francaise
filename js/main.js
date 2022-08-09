function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function data(){
    var div;
    var date= new Date();
    var an, luna, zi;
    var text;

    an= date.getFullYear();
    luna = date.getMonth() + 1;
    zi = date.getDate();
    text = zi+ "/" + luna+ "/"+ an;

    div = document.getElementById("data");
    div.innerHTML = "Procopii Tatiana" + " " + text; 
}
data();


