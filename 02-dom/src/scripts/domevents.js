import domfunctions from './domfunctions.js'

// BASIC DOM - Competency 110

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

    showbutton.addEventListener("click", (e) => {
        
        // console.log("SHOW BUTTON CLICKED IN DOMEVENTS");
          
        if (showlist.style.display === "none") {
            showlist.style.display = "block";
        } else {
            showlist.style.display = "none";
        }
    });
    
// Add Item At End Of List 

    let addbutton = document.getElementById("buttonAdd");

    addbutton.addEventListener("click", () => {

        // let orderlist = document.getElementsByTagName("ol");
        let nextitem = document.createElement("li");
        let list = document.querySelector("ol");

        // console.log("ADD BUTTON CLICKED");
        // console.log(list);

        list.appendChild(nextitem);
        nextitem.appendChild(document.createTextNode("Next Item"));

    });

// Remove Item FROM LIST

    let deletebutton = document.getElementById("buttonDelete");

    deletebutton.addEventListener("click", () => {

        let list = document.querySelector("ol");
        
        // console.log("DELETE BUTTON CLICKED");

        list.removeChild(list.lastElementChild);
        
    });


// WORKING WITH CARDS

// Build Card

    let cardSection = document.getElementById("idCardSection");

    let cardNum = 1

    function buildNewCard(div) {

        console.log("This is a new card")
        
        // let div = document.createElement("div");
        div.classList.add("myCardClass");

        const breakLine1 = document.createElement("br");
        div.appendChild(breakLine1);
        
        const cardTitle = document.createElement("strong");
        cardTitle.textContent = "Card " + cardNum++;
        cardTitle.classList.add("text-center");

        const breakLine2 = document.createElement("br");
        div.appendChild(breakLine2);

        // const addBeforeButton = document.createElement('button');
        // addBeforeButton.textContent("Add Before");
        // addBeforeButton.classList.add("button");
        // div.appendChild(addBeforeButton);

        // const addAfterButton = document.createElement('button');
        // addAfterButton.textContent("Add After");
        // addAfterButton.classList.add("button");
        // div.appendChild(addAfterButton);

        // const breakLine3 = document.createElement("br");
        // div.appendChild(breakLine3);

        // const removeCardButton = document.createElement('button');
        // removeCardButton.textContent("Remove Card");
        // removeCardButton.classList.add("button");
        // div.appendChild(removeCardButton);

    };

// Add Card Below

    let addCardBelow = document.getElementById("addCardButton");

    addCardBelow.addEventListener("click", () => {

        console.log("Add Card Button Clicked");

        let div = document.createElement("div");
        buildNewCard(div);
        cardSection.appendChild(div);

    });

// Add Card Before

    let addCardBefore = document.getElementById("addBeforeButton");
    
    addCardBefore.addEventListener("click", () => {

        console.log("Add Before Button Clicked");

        // let div = document.createElement("div");
        // buildNewCard(div);
        // initialCard.appendChild(div);

    });

// Add Card After

    let addCardAfter = document.getElementById("addAfterButton");
    
    addCardAfter.addEventListener("click", () => {

        console.log("Add After Button Clicked");

        // let div = document.createElement("div");
        // buildNewCard(div);
        // idInitialCard.appendChild(div);

    });

// Remove Card

    let removeCard = document.getElementById("removeButton");
    
    removeCard.addEventListener("click", () => {

        console.log("Remove Card Button Clicked");

        let div = document.getElementById("idCardSection");
        div.removeChild(div.lastElementChild);

    });









