function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        document.getElementById("error").innerText = "Invalid login details";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (user.role === "admin") {
        window.location.href = "admin/dashboard.html";
    } else if (user.role === "teacher") {
        window.location.href = "teacher/dashboard.html";
    } else if (user.role === "student") {
        window.location.href = "student/dashboard.html";
    } else if (user.role === "parent") {
        window.location.href = "parent/dashboard.html";
    }
}
