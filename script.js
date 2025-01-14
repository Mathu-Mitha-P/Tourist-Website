document.getElementById('Destinationpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('placesToVisit').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('Gallerypage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('Servicepage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('service').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('homepage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
