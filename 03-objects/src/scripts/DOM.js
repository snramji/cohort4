const DOMfunctions = {

    // let cardNum = 1
    
    buildNewCard(div) {
        
        // console.log("This is a new card")
        const cardSection = document.getElementById("idAcctCardSection");
        
        div.classList.add("clAcctCards");
    
        const cardTitle = document.createElement("strong");
        cardTitle.textContent = "Account Name;
        cardTitle.classList.add("text-center");
        div.appendChild(cardTitle);

        const breakLine1 = document.createElement("br");
        div.appendChild(breakLine1);

        const addDepositButton = document.createElement('button');
        addDepositButton.append(document.createTextNode("Deposit"));
        addDepositButton.classList.add("button");
        div.appendChild(addDepositButton);

        const addWithdrawButton = document.createElement('button');
        addWithdrawButton.append(document.createTextNode("Withdraw"));
        addWithdrawButton.classList.add("button");
        div.appendChild(addAfterButton);

        const currentBalance = 

        const breakLine2 = document.createElement("br");
        div.appendChild(breakLine2);

        const removeAcctButton = document.createElement('button');
        removeAcctButton.append(document.createTextNode("Remove Account"));
        removeAcctButton.classList.add("button");
        div.appendChild(removeAcctButton);

    };

};

export default DOMfunctions;