// DOM Functions //

const domfunctions = {

// Show list items function

   showListAfterClick:  (e) => {

        console.log("SHOW BUTTON CLICKED IN DOMFUNCTIONS");
        
        // let showlist = document.getElementById("itemList");
        // showlist.style.display = "none";

        if (showlist.style.display === "none") {
            showlist.style.display = "block";
        } else {
            showlist.style.display = "none";
        }
    }







};

export default domfunctions;