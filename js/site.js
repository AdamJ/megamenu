$("#mega-menu--dropdown").click(function() {
  $("#megaMenu").toggle("slow", function() {
    // toggle the mega menu
  });
  $("#projectDetails").hide("fast", function () {
    // show project details
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
