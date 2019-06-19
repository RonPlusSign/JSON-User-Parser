/*  // USER FORMAT //
<div class="user">
    <p>
        <span class="name">Name</span>
        <span class="surname">Surname</span>
    </p>

    <p class="email">mail@example.com</p>

    <p class="location">
        <span class="address">Example address, 123</span>,
        <span class="city">City</span>,
        <span class="country">Country</span>, (<span class="postal_code">1234</span>)
    </p>
</div>
*/

var users_list = []

function createUserFromForm() {
    var user = {
        name: $("#inputName").val(),
        surname: $("#inputSurname").val(),
        email: $("#inputEmail").val(),
        address: $("#inputAddress").val(),
        city: $("#inputCity").val(),
        state: $("#inputCountry").val(),
        postal_code: $("#inputPostalCode").val()
    }

    cleanForm();

    users_list.push(user);
    appendUserToList(user);
}

//function used to clear all the data in the form fields
function cleanForm() {
    $("#inputName").val("");
    $("#inputSurname").val("");
    $("#inputEmail").val("");
    $("#inputAddress").val("");
    $("#inputCity").val("");
    $("#inputState").val("");
    $("#inputPostalCode").val("");
}

var inputButton = document.getElementById("JSONinput");
inputButton.addEventListener('change', function (event) {
    var file = inputButton.files[0];
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function (event) {
        var new_users = JSON.parse(reader.result);

        for (user of new_users) {
            users_list.push(user);
            appendUserToList(user);
        }
    }
});

function appendUserToList(user) {
    $("#usersTable").append('<div class="user">'
        + '<p><span class="name">' + user.name
        + '</span> <span class="surname">' + user.surname
        + '</span></p><p class="email">' + user.email
        + '</p><p class="location"><span class="address">' + user.address
        + '</span>, <span class="city">' + user.city
        + '</span>, <span class="country">' + user.state
        + '</span>, (<span class="postal_code">' + user.postal_code
        + '</span>)</p></div>');
}

function exportJsonFile() {
    var filename = 'users-list.json';
    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(users_list)));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
