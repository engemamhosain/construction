console.log("page acti ed")
const currentPage = window.location.pathname.split("/").pop();

  // Get all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  console.log(navLinks)
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");


    console.log(linkPage,currentPage)
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      console.log(link)
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });



  
