const DOMfunctions = {
   
    buildNewCard(div, node, text) {
        
        // const cardSection = document.getElementById("idAcctCardSection");

        // const div = document.createElement('div');
        
        div.classList.add("clAcctCards");
    
        const cardTitle = document.createElement("strong");
        cardTitle.textContent = text.name;
        cardTitle.classList.add("text-center");
        div.appendChild(cardTitle);

        const breakLine1 = document.createElement("br");
        div.appendChild(breakLine1);

        const labelCurrBal = document.createElement("strong");
        labelCurrBal.textContent = "Current Balance:";
        labelCurrBal.classList.add("text-center");
        div.appendChild(labelCurrBal);
        
        const breakLine2 = document.createElement("br");
        div.appendChild(breakLine2);

        let currentBalance = document.createElement("P");
        currentBalance.textContent = "$" + text.balance;
        currentBalance.classList.add("text-center");
        div.appendChild(currentBalance);

        const breakLine3 = document.createElement("br");
        div.appendChild(breakLine3);

        const removeAcctButton = document.createElement('button');
        removeAcctButton.append(document.createTextNode("Remove Account"));
        removeAcctButton.classList.add("button");
        div.appendChild(removeAcctButton);

    },

    acctsDropDown(text) {
        const options = document.createElement('OPTION');
        options.setAttribute('id', text.name);
        options.appendChild(document.createTextNode(text.name));
        return options;
    },

    attachToDD(node, text) {
        const options = DOMfunctions.acctsDropDown(text);
        console.log(node);
        node.appendChild(options, node);
    },

    deleteAcctCard(node) {
        node.remove();
    },


};

export default DOMfunctions;