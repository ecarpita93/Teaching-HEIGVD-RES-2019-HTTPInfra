$(function() {
    console.log("loading animals");

    function loadAnimals() {
        $.getJSON( "/api/animals/", function(animals) {
            console.log(animals);
            var message = "No animals";
         	if(animals.length > 0) {
                message = animals[0].animal + " is my favourite animal";
            }
            $(".display-4").text(message);
        });
    };

    loadAnimals();
    setInterval(loadAnimals, 2000);
});