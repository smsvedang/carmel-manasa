const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user || user.role !== "admin") {
    window.location.href = "../login.html";
}

document.getElementById("adminName").innerText =
    "Welcome, " + user.username;

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../login.html";
}
