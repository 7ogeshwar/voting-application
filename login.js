var users = [];
function login() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var errorMessage = document.getElementById("error-message");
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    console.log("Username:", username);
    console.log("Password:", password);
    var matchingUser = null;
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
            matchingUser = user;
            break;
        }
    }
    console.log("Matching User:", matchingUser);
    if (matchingUser) {
        if (matchingUser.role.toLowerCase() === "admin") {
            window.location.href = "admin.html";
        }
        else {
            window.location.href = "user.html";
        }
    }
    else {
        if (errorMessage) {
            errorMessage.textContent = "Invalid username or password.";
        }
        else {
            console.error("Error message element not found.");
        }
    }
}
function register() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var roleSelect = document.getElementById("role");
    var errorMessage = document.getElementById("error-message");
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    var role = roleSelect.value;
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Role:", role);
    // Check if username or password is empty
    if (!username || !password) {
        if (errorMessage) {
            errorMessage.textContent = "Username and password are required.";
        }
        else {
            console.error("Error message element not found.");
        }
        return;
    }
    // Check if username already exists
    if (users.some(function (user) { return user.username === username; })) {
        if (errorMessage) {
            errorMessage.textContent = "Username already taken.";
        }
        else {
            console.error("Error message element not found.");
        }
        return;
    }
    // Add the new user to the users array
    var newUser = { username: username, password: password, role: role };
    users.push(newUser);
    console.log("New User:", newUser);
    console.log("Users Array:", users);
    // Redirect to the login page
    window.location.href = "login.html";
}
