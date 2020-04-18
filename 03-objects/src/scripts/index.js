import DOMfunctions from './DOM.js';
import ooStuff from './account.js';

document.body.addEventListener("click", e => {

    if (e.target.nodeName === 'BUTTON') {

        if (e.target.textContent === "Add Account") {

            // console.log("Add Account Button Clicked");
            
            let div = document.createElement("div");
            DOMfunctions.buildNewCard(div);
            cardSection.appendChild(div);

        } else if (e.target.textContent === "Deposit") {

            // console.log("Deposit Button Clicked");

            let div = document.createElement("div");
            buildNewCard(div);
            cardSection.insertBefore(div, event.target.parentNode);

        } else if (e.target.textContent === "Withdraw") {

            // console.log("Add After Button Clicked");

            let div = document.createElement("div");
            buildNewCard(div);
            cardSection.insertBefore(div, event.target.parentNode.nextElementSibling);
            
        } else if (e.target.textContent === "Remove Account") {

            // console.log("Remove Account Button Clicked");

            let div = document.getElementById("idCardSection");
            
            div.removeChild(e.target.parentElement);
            
        } else if (e.target.textContent === "Lowest Account Balance") {

            // console.log("Lowest Account Balance Button Clicked");

            // let div = document.getElementById("idCardSection");
            
            // div.removeChild(e.target.parentElement);
           
        } else if (e.target.textContent === "Highest Account Balance") {

            // console.log("Highest Account Button Clicked");

            // let div = document.getElementById("idCardSection");
            
            // div.removeChild(e.target.parentElement);
          
        } else if (e.target.textContent === "Total Account Balance") {

            // console.log("Total Account Balance Button Clicked");

            // let div = document.getElementById("idCardSection");
            
            // div.removeChild(e.target.parentElement);


       }

    }

})