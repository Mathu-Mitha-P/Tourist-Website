let timeoutInitialized = false;

if (!timeoutInitialized) {
    timeoutInitialized = true;

    var a = setTimeout(login, 2000); // Call login after 2 seconds

    function login() {
        var userChoice = confirm("Do you want to login?");
        if (userChoice) {
            var username = prompt("What is your name?");
            window.location.href = "Login.html";
            alert("Great! Start Your Login");
        } else {
            alert("Login Cancelled");
        }
    }
} 
//scroll

document.getElementById('homepage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('placesToVisit').scrollIntoView({ behavior: 'smooth' });
});
