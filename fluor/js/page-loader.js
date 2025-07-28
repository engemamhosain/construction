// const currentPage = window.location.pathname.split("/").pop();

// if(currentPage==="index.html"){

//   fetch("home-background.html")
//   .then(response => response.text())
//   .then(data => {
//     document.getElementById("include-background").innerHTML = data;
//   });

// }


fetch("./pages/service.html")
.then(response => response.text())
.then(data => {
document.getElementById("service").innerHTML = data;
});

fetch("./pages/market.html")
.then(response => response.text())
.then(data => {
document.getElementById("market").innerHTML = data;
});


fetch("./pages/about.html")
.then(response => response.text())
.then(data => {
document.getElementById("about").innerHTML = data;
});

fetch("./pages/feature.html")
.then(response => response.text())
.then(data => {
document.getElementById("feature").innerHTML = data;
});

fetch("./pages/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
// fetch("gallery.html")
// .then(response => response.text())
// .then(data => {
// document.getElementById("projects-gallery").innerHTML = data;
// });

// fetch("footer.html")
// .then(response => response.text())
// .then(data => {
// document.getElementById("include-footer").innerHTML = data;
// });



  
