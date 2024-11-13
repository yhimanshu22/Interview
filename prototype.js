//==============================1st example===========================

// function mult(num){
//     return num*5;
// }

// mult.power = 2

// console.log(mult.power);
// console.log(mult(5));
// console.log(mult.prototype);

// function createUser(user,score){
//     this.user = user;
//     this.score = score;
// }

// createUser.prototype.increment =  function(){
//      this.score++;
// }

// createUser.prototype.printMe = function(){
//     console.log(this.user,this.score);
// }

// const tea = new createUser('hium',20);
// const chai = new createUser('himu',25);

// tea.printMe();
// chai.printMe();


//========================================2nd examles=========================

const myHeroesArray = ['hfiw','dscn']

const heroObject = {
    name:'himu',
    email:'a@gmaul.com'
}

Object.prototype.heyHimu = function(){
    console.log('this is in object');
}

Array.prototype.heyHimuarray = function(){
    console.log('thsi is in array');
}

heroObject.heyHimu()
myHeroesArray.heyHimu()
myHeroesArray.heyHimuarray()
// heroObject.heyHimuarray() //wrong ans
