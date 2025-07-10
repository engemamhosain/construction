const currentPage = window.location.pathname.split("/").pop();

if(currentPage==="index.html"){

  fetch("home-background.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("include-background").innerHTML = data;
  });

}


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

fetch("footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("include-footer").innerHTML = data;
});



  
