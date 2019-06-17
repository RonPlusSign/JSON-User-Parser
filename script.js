
/*  // USER FORMAT //
<div class="user">
    <p>
        <span class="nome">Nome</span>
        <span class="cognome">Cognome</span>
    </p>

    <p class="email">mail@esempio.it</p>

    <p class="location">
        <span class="indirizzo">Via dei viali, 27</span>,
        <span class="citta">Firenze</span>,
        <span class="stato">Italia</span>, (<span class="cap">123456</span>)
    </p>
</div>
*/

var users_list = [
    {
        nome: "1",
        cognome: "1",
        email: "1@esempio.it",
        indirizzo: "Via dei viali, 27",
        citta: "Firenze",
        stato: "Italia",
        CAP: "123456"
    },
    {
        nome: "2",
        cognome: "2",
        email: "2@esempio.it",
        indirizzo: "Via dei viali, 27",
        citta: "Firenze",
        stato: "Italia",
        CAP: "123456"
    },
    {
        nome: "3",
        cognome: "3",
        email: "3@3.it",
        indirizzo: "Via dei viali, 27",
        citta: "Firenze",
        stato: "Italia",
        CAP: "123456"
    }
]

function createNewUser() {
    var user = {
        nome: $("#inputNome").val(),
        cognome: $("#inputCognome").val(),
        email: $("#inputEmail").val(),
        indirizzo: $("#inputIndirizzo").val(),
        citta: $("#inputCitta").val(),
        stato: $("#inputStato").val(),
        CAP: $("#inputCAP").val()
    }

    cleanForm();

    users_list.push(user);
    appendUserToList(user);
}

//function used to clear all the data in the form fields
function cleanForm() {
    $("#inputNome").val("");
    $("#inputCognome").val("");
    $("#inputEmail").val("");
    $("#inputIndirizzo").val("");
    $("#inputCitta").val("");
    $("#inputStato").val("");
    $("#inputCAP").val("");
}

var inputButton = document.getElementById("JSONinput");
inputButton.addEventListener('change', function (event) {
    var file = inputButton.files[0];
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function (event) {
        var new_users = JSON.parse(reader.result);

        for(var i = 0; i < new_users.length; i++){
            createNewUser(JSON.parse(new_users[i]));
        }
    }
});

function fromStringToObject(string){

}

function appendUserToList(user) {
    $("#usersTable").append('<div class="user">'
        + '<p><span class="nome">' + user.nome
        + '</span> <span class="cognome">' + user.cognome
        + '</span></p><p class="email">' + user.email
        + '</p><p class="location"><span class="indirizzo">' + user.indirizzo
        + '</span>, <span class="citta">' + user.citta
        + '</span>, <span class="stato">' + user.stato
        + '</span>, (<span class="cap">' + user.CAP
        + '</span>)</p></div>');
}

function exportJsonFile() {
    var filename = 'download-file.json';
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(users_list)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
