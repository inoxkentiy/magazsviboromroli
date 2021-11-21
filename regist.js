let button = document.getElementById("btn");
let loginInput = document.getElementById("login");
let passwordInput = document.getElementById("password");
let adminRadio = document.getElementById("adminRadio");
let notAdminRadio = document.getElementById("notAdminRadio");

button.addEventListener('click', () => {
    let isAdmin = adminRadio.checked;

    let newUser = {
        login: loginInput.value,
        password: passwordInput.value,
        role: isAdmin ? "Admin" : "User"
    }
    if (newUser.role == 'Admin') {
        window.location.href = 'admin.html'
    }else(
        window.location.href = 'user.html'
    )
    console.log(newUser);
})