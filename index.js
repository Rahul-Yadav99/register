var user = {}

function signup (event) {
    event.preventDefault();
    var form = document.forms.register;
    user.firstname = form.elements.firstname.value;
    user.lastname = form.elements.lastname.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user)
}
function singin (event) {
    event.preventDefault()
    var form = document.forms.Login;
   user.email = form.elements.email.value;
   user.password = form.elements.password.value;
    console.log(user)
}