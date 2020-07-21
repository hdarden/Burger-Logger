$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      

      // Send the PUT--update request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
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
      console.log('hello')
      var burgerName = {
          burger_name: $("#burg").val().trim()
    };

  
      // Send the POST request.
      $.ajax("/api/burgers", {
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

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      //send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function(){
          console.log("deleted burger", id);
          location.reload();
        }
      )
    })
});