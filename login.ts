interface User {
    username: string;
    password: string;
    role: string;
}

var users: User[] = []; 

function login() {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const errorMessage = document.getElementById("error-message");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    console.log("Username:", username);
    console.log("Password:", password);

    let matchingUser: User | null = null;

    for (const user of users) {
        if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
            matchingUser = user;
            break;
        }
    }

    console.log("Matching User:", matchingUser);

    if (matchingUser) {
        if (matchingUser.role.toLowerCase() === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "user.html";
        }
    } else {
        if (errorMessage) {
            errorMessage.textContent = "Invalid username or password.";
        } else {
            console.error("Error message element not found.");
        }
    }
}

function register() {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const roleSelect = document.getElementById("role") as HTMLSelectElement;
    const errorMessage = document.getElementById("error-message");

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleSelect.value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Role:", role);

    // Check if username or password is empty
    if (!username || !password) {
        if (errorMessage) {
            errorMessage.textContent = "Username and password are required.";
        } else {
            console.error("Error message element not found.");
        }
        return;
    }
    
    // Check if username already exists
    if (users.some(user => user.username === username)) {
        if (errorMessage) {
            errorMessage.textContent = "Username already taken.";
        } else {
            console.error("Error message element not found.");
        }
        return;
    }

    // Add the new user to the users array
    const newUser: User = { username, password, role };
    users.push(newUser);

    console.log("New User:", newUser);
    console.log("Users Array:", users);

    // Redirect to the login page
    window.location.href = "login.html";
}
