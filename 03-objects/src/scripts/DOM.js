const DOMfunctions = {
   
    buildNewCard(node, text) {
        
        // const cardSection = document.getElementById("idAcctCardSection");

        const div = document.createElement('div');

        div.setAttribute('class', 'clAcctCards');
        div.setAttribute('id', text.name);
        div.appendChild(document.createTextNode(text.name));
    
        let cardTitle = document.createElement("strong");
        cardTitle.setAttribute('id', `cardTitle ${text.name}`);
        div.appendChild(cardTitle);

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
        currentBalance.id = `idAcctCard ${text.name}`;
        currentBalance.textContent = "$" + text.balance;
        currentBalance.classList.add("text-center");
        div.appendChild(currentBalance);

        
        const removeAcctButton = document.createElement('button');
        removeAcctButton.append(document.createTextNode("Remove Account"));
        removeAcctButton.classList.add("button");
        div.appendChild(removeAcctButton);
        
        const breakLine3 = document.createElement("br");
        div.appendChild(breakLine3);

        node.parentElement.insertBefore(div, node);

        return div;

    },

    acctsDropDownList(text) {
        const dropdownList = document.createElement('OPTION');
        dropdownList.setAttribute('id', text.name);
        dropdownList.appendChild(document.createTextNode(text.name));
        return dropdownList;
    },

    attachDropDown(node, text) {
        const dropdownList = DOMfunctions.acctsDropDownList(text);
        console.log(node);
        node.appendChild(dropdownList, node);
    },

    deleteAcctCard(node) {
        node.remove();
    },

};

export default DOMfunctions;