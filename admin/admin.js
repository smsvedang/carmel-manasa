const user = JSON.parse(localStorage.getItem("loggedInUser"));
if (!user || user.role !== "admin") {
    location.href = "../login.html";
}

let classes = JSON.parse(localStorage.getItem("classes")) || [];
let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
let students = JSON.parse(localStorage.getItem("students")) || [];

function showSection(id) {
    document.querySelectorAll(".panel").forEach(p => p.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

/* CLASSES */
function addClass() {
    const c = className.value;
    const s = sectionName.value;
    if (!c || !s) return;
    classes.push({ class: c, section: s });
    localStorage.setItem("classes", JSON.stringify(classes));
    renderClasses();
}

function renderClasses() {
    classList.innerHTML = "";
    classes.forEach(cs => {
        classList.innerHTML += `<li>${cs.class} - ${cs.section}</li>`;
    });
}
renderClasses();

/* TEACHERS */
function addTeacher() {
    teachers.push({
        name: tName.value,
        class: tClass.value,
        section: tSection.value
    });
    localStorage.setItem("teachers", JSON.stringify(teachers));
    renderTeachers();
}

function renderTeachers() {
    teacherList.innerHTML = "";
    teachers.forEach(t => {
        teacherList.innerHTML += `<li>${t.name} (${t.class}-${t.section})</li>`;
    });
}
renderTeachers();

/* STUDENTS */
function addStudent() {
    students.push({
        name: sName.value,
        class: sClass.value,
        section: sSection.value,
        roll: sRoll.value
    });
    localStorage.setItem("students", JSON.stringify(students));
    renderStudents();
}

function renderStudents() {
    studentList.innerHTML = "";
    students.forEach(s => {
        studentList.innerHTML += `<li>${s.roll} - ${s.name} (${s.class}-${s.section})</li>`;
    });
}
renderStudents();

/* LOGOUT */
function logout() {
    localStorage.removeItem("loggedInUser");
    location.href = "../login.html";
}
