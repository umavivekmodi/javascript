const user ={
    _email : 'code@gmail.com',
    _password : "efg",



    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
// fectory function Object.create()
const tea = Object.create(user)
console.log(tea.email);