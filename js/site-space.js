// sets the notification drawer to slide right to left
$("#notifications").click(function () {
  var effect = 'slide';
  var options = { direction: 'right' };
  $(".notification-drawer").toggle(effect, options);
});

$("#mega-menu--dropdown").click(function() {
  $("#megaMenu").toggle("fast", function() {
    // toggle the mega menu
  });
  $("#projectDetails").show("fast", function () {
    // hide project details
  });
  $("#megaMenuBase").hide("fast", function () {
    // show the mega menu
  });
});

$("#showProjectDetails").click(function() {
  $("#megaMenuBase").hide("fast", function() {
    // hide base mega menu content
  });
  $("#projectDetails").show("fast", function () {
    // show project details
  });
  $(".project-name").removeClass("hide"); // show the space name
  $(".generic-space").addClass("hide"); // hide the placeholder space name
});
$("#hideProjectDetails").click(function () {
  $("#megaMenuBase").show("fast", function () {
    // hide base mega menu content
  });
  $("#projectDetails").hide("fast", function () {
    // show project details
  });
  $(".project-name").addClass("hide"); // hide the space name
  $(".generic-space").removeClass("hide"); // show the placeholder space name
});

$("#toggleNewFeature").click(function () {
  $("#newFeature").toggleClass("hide"); // remove the .hide class if applied
  $("#recentHighlights").toggleClass("hide"); // add the .hide class to show the newFeature block
});

$("#spaceMenuButton").click(function () {
  $("#spaceMenu").toggleClass("hide-space-menu").toggleClass("show-space-menu");
});
