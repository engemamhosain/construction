
 $(function() {
    let currentSection = null;
    let currentLink = null;

    $("nav a").click(function(e) {
      e.preventDefault();

      const target = $(this).data("target");
      const section = $(target);

      // Close any other open section
      if (currentSection && currentSection.attr("id") !== section.attr("id")) {
        currentSection.slideUp("slow");
        currentLink.removeClass("active");
        currentLink.find(".arrow").removeClass("rotate");
      }

      // Toggle current section
      if (section.is(":visible")) {
        section.slideUp("slow");
        $(this).removeClass("active");
        $(this).find(".arrow").removeClass("rotate");
        currentSection = null;
        currentLink = null;
      } else {
        section.slideDown("slow");
        $(this).addClass("active");
        $(this).find(".arrow").addClass("rotate");
        currentSection = section;
        currentLink = $(this);
      }
    });
  });