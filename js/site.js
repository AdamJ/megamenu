$("#mega-menu--dropdown").click(function() {
  $("#megaMenu").toggle("slow", function() {
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
});
$("#hideProjectDetails").click(function () {
  $("#megaMenuBase").show("fast", function () {
    // hide base mega menu content
  });
  $("#projectDetails").hide("fast", function () {
    // show project details
  });
});

$("#toggleNewFeature").click(function () {
  $("#newFeature").toggleClass("hide"); // remove the .hide class if applied
  $("#recentHighlights").toggleClass("hide"); // add the .hide class to show the newFeature block
});
