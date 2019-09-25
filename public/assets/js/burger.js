$(document).ready(function() {

    $(".devour").on("click", (event) => {
        console.log(event.currentTarget)
        console.log(event.currentTarget.dataset.id);
        var id = event.currentTarget.dataset.id;
        if(event.currentTarget.dataset.devoured == 1) {
            state = 0;
        } else {
            state = 1;
        }

        console.log(state);
        
        var newState = {
            devoured: state
        }

        console.log(newState);

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newState
        }).then(() => {
            console.log("change devour to ", newState.devoured);

            location.reload();
        })
        
    })

    $(".create-form").on("submit", (event) => {
        event.preventDefault();
        if($("#bu").val().trim()) {
            var burger = $("#bu").val().trim();

            var newBurger = {
                name: burger,
                devoured: 0
            }

            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then((result) => {
                
                console.log("burger created");

                location.reload();
            })

        } else {
            alert("Please enter a burger name.")
        }
    })

});