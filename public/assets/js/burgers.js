$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log("burger has been DEVOURED!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burgerName = $("#burger_name");
  
      // Send the POST request.
      $.ajax("/burgers", {
        type: "POST",
        data: burgerName
      }).then(
        function() {
          console.log("created a new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});