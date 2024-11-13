//window = {this = window}
//node = this = undefined

function setUsername(username){
    this.username =username
    console.log('ccaleed');
}

function createUser(username,email,password){
    setUsername.call(this,username) //after adding this username added
    this.email = email
    this.password = password
}

const himu = new createUser('hium','himu@gmail.com',123)
console.log(himu);