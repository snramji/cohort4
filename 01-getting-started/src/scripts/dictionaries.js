// Working With Dictionaries



const dictionaries = {

    provinces: {
        'ab' : "Alberta",
        'bc' : "British Columbia",
    },

    dictObjAdd(codeProv, nameProv) {
        dictionaries.provinces[codeProv] = nameProv;
        // console.log(provinces);
    },

    dictObjGet(lookupCodeProv) {
        return dictionaries.provinces[lookupCodeProv];
    }
}

export default dictionaries;