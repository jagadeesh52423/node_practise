var fs = require("fs");

fs.readFile("input.txt", function(err, data){
    if (err) {
        console.log(err);
    } else {
        setTimeout(()=>{
            console.log("Printing after 2 seconds");
        }, 2000);
    }
    console.log("This will be printed by the time!");
});
