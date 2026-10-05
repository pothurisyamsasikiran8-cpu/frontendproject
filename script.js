// ========================================
// ADMIN ACCESS PROTECTION
// ========================================

const isAdmin = localStorage.getItem("gameZoneAdmin");

if (
    window.location.pathname.endsWith("admin.html") &&
    isAdmin !== "true"
) {
    window.location.href = "admin-login.html";
}


// ========================================
// LOGIN MODAL
// ========================================

function openLogin() {

    document.getElementById("loginModal").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display = "none";

}


// Close login modal when clicking outside

window.addEventListener("click", function(event) {

    const modal = document.getElementById("loginModal");

    if (modal && event.target === modal) {
        modal.style.display = "none";
    }

});


// ========================================
// LOGIN
// ========================================

function login() {

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    if (email === "" || password === "") {

        alert("Please enter email and password.");

        return;

    }


    alert("Login successful! 🎮");

    closeLogin();

}


// ========================================
// TOURNAMENT REGISTRATION
// ========================================

function registerTournament(tournamentName) {

    alert(
        "🎮 Tournament Registration\n\n" +
        "You selected: " +
        tournamentName +
        "\n\nRegistration page will open soon!"
    );

}


// ========================================
// SCROLL TO TOURNAMENTS
// ========================================

function scrollToTournaments() {

    const tournaments =
        document.getElementById("tournaments");

    if (tournaments) {

        tournaments.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ========================================
// SCROLL TO MATCHES
// ========================================

function scrollToMatches() {

    const matches =
        document.getElementById("matches");

    if (matches) {

        matches.scrollIntoView({
            behavior: "smooth"
        });

    }

}