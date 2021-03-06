// Created a create post event function
$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newTask = {
        post_name: $("#newpost")
          .val()
          .trim(),
        devoured: 0
      };
  
      $.ajax("/api/post", {
        type: "POST",
        data: newPost
      }).then(function() {
        console.log("New post added!");
        location.reload();
      });
    });

// Possibly create and edit post function
  
// Created a delete post function
    $(".deletepost").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/post/" + id
      }).then(location.reload());
    });
  });