class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
   static createId(){           // is property ka access lene k liye ek baar k liye rook deta h
        return `123`
    }
}
const hitesh = new user("hitesh")
// console.log(hitesh.createId());



class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email 
    }
}

const iphone = new Teacher("iphone" ,"iphone@google.com")
iphone.logMe();

console.log(iphone.createId());

