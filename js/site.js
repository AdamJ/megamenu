$("#mega-menu--dropdown").click(function() {
  $("#megaMenu").toggle("fast", function() {
    // toggle the mega menu
  });
  $("#projectDetails").hide("fast", function () {
    // hide project details
  });
  $("#megaMenuBase").show("fast", function () {
  });
});

$("#showProjectDetails").click(function() {
  $("#megaMenuBase").hide("fast", function() {
    // hide base mega menu content
  });
  $("#projectDetails").show("fast", function () {
    // show project details
  });
  $(".project-name").removeClass("hide");
  $(".generic-space").addClass("hide");
});
$("#hideProjectDetails").click(function () {
  $("#megaMenuBase").show("fast", function () {
    // hide base mega menu content
  });
  $("#projectDetails").hide("fast", function () {
    // show project details
  });
  $(".project-name").addClass("hide");
  $(".generic-space").removeClass("hide");
});

$("#toggleNewFeature").click(function () {
  $("#newFeature").toggleClass("hide"); // remove the .hide class if applied
  $("#recentHighlights").toggleClass("hide"); // add the .hide class to show the newFeature block
});

$("#spaceMenuButton").click(function () {
  $("#spaceMenu").toggleClass("hide-space-menu").toggleClass("show-space-menu");
});
