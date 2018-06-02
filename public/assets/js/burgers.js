$(function() {
  var totalBites = 4;
  var currentBites = 0;

  $(".change-devoured").on("click", function(event) {
    // event.preventDefault();
    console.log($(this).data("newdevoured"));
    if ((currentBites < totalBites) && ($(this).data("newdevoured") === true)) {
      currentBites++;
      $(this).siblings('.progress').find('.progress-bar').css("width", Math.round(100 * currentBites / totalBites) + "%");
    } else {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }). then(
        function() {
          console.log("Changed devoured state to: ", newDevoured);
          location.reload();
        }
      );
    }
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,

    }).then(
      function() {
        console.log("created a new burger");
        location.reload();
      }
    );
  });
});