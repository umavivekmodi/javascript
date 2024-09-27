// ES6
// class is a key word

class user {
    constructor(username , email ,password){
        this.username = username;
        this.email = email;
        this.password = password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new user("chai", "chai@google.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeusername());


//behind the scene

function User (username , email ,password){
        this.username = username;
        this.email = email;
        this.password = password
}
User.prototype.encryptPassword =function(){
    return `${this.password}def`
}
User.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}
const code = new User("code", "code@google.com","123")
console.log(code.encryptPassword());
console.log(code.changeusername());