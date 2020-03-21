// import domfunctions from './domfunctions.js'

// DOM Event Listeners //

// Confirm mouse click on body element and console log properties of body element

// document.body.addEventListener("click", e => {

//     console.log("CLICKED");
//     console.log(e.target.textContent);
//     console.log(e.target.nodeName);
//     console.log(e.target);

// });

// Show List Items

let showbutton = document.getElementById("buttonShow");
let showlist = document.getElementById("itemList");
showlist.style.display = "none";


showbutton.addEventListener("click", showListAfterClick);

    function showListAfterClick() {
        
        // console.log("SHOW BUTTON CLICKED");
        
        if (showlist.style.display === "none") {
            showlist.style.display = "block";
        } else {
            showlist.style.display = "none";
        }
    };

// Add Item At End Of List 

let addbutton = document.getElementById("buttonAdd");
let nextitem = document.createElement("li");
let list = document.querySelector("ol");
let orderlist = document.getElementsByTagName("ol");

addbutton.addEventListener("click", addListAfterClick);

    function addListAfterClick() {

        // console.log("ADD BUTTON CLICKED");
        // console.log(orderlist);
        // console.log(list);

        list.appendChild(nextitem);
        nextitem.appendChild(document.createTextNode("Next Item"));

    };

// Remove Item FROM LIST

let deletebutton = document.getElementById("buttonDelete");

deletebutton.addEventListener("click", removeItemAfterClick);

    function removeItemAfterClick() {

        // console.log("DELETE BUTTON CLICKED");

        list.removeChild(list.lastElementChild);
        list.removeChild(list.firstElementChild);
   
    };









