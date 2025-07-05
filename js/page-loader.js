fetch("service.html")
.then(response => response.text())
.then(data => {
document.getElementById("projects-service").innerHTML = data;
});

fetch("gallery.html")
.then(response => response.text())
.then(data => {
document.getElementById("projects-gallery").innerHTML = data;
});
