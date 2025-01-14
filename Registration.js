

    emailjs.init('Jr7DIXpE0WAUH0MKW'); // Replace with your EmailJS public key

    const form = document.getElementById('register-form');
    const button = document.getElementById('register-button');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      button.textContent = 'Sending...';

      const serviceID = 'service_lcb7ayp'; // Replace with your EmailJS service ID
      const templateID = 'template_9sdbtpn'; // Replace with your EmailJS template ID

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          button.textContent = 'Register';
          alert('Registration sent successfully!');
          form.reset();
        }, (err) => {
          button.textContent = 'Register';
          alert(JSON.stringify(err));
        });
    });
