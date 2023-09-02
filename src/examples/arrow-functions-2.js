// this nedir:

const user = {
    name: 'bamdo',
    email: 'info@bamdo.com',
    city: 'mardin',
    roles: ['admin', 'customer'],
    getRoles: function() {
        this.roles.forEach((role) => {
            console.log(role);
            console.log(this.name);
        })
    }
}
user.getRoles();

const addES5 = function() {
    let total = 0;
    for(let i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// burada yeni scope olusmadigi icin olusturulmazda bu yuzden bu calismaz.
const addES56 = () => {
    console.log(arguments);
}

console.log(addES5(5,10,20,30));
console.log(addES5(5,10,20,30,40));

addES6();