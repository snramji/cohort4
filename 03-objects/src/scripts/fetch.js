url: 'https://jsonplaceholder.typicode.com/users'

const functions = {
        
    getFirstName(data) {
        return data[0].name;
    },

    getFirstNameAll(data) {
        let allFirstNames = [];
        return allFirstNames = data.map((d, i, x) => d.name);
    },

};

export default functions;