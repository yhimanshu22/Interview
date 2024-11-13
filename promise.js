// const promiseOne = new Promise(function(resolve,reject){
//     //do async call
//     //db calls,cryptography,network
//     setTimeout(function(){
//         console.log('async task is complete');
//         resolve()
//     },2000)
// })



// promiseOne.then(function(){
//     console.log('promise consumed');
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('task complted');
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'himu'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(
//     function(resolve,reject){
//      setTimeout(() => {
//         let error = false
//         if(!error){
//             resolve({username:'himu',email:"himu@gmail.com"})
//         }else{
//             reject(console.log(error))
//         }
//      }, 1000);
//     }
// )

// promiseFour.then((user) => {
//     console.log(user)
//     return user.username

// }).then((username)=> {console.log(username);})
// .catch((e) => console.log('something  went worn'))
// .finally(()=>{
//     console.log('finally is always resolve');
// })


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:'himu',email:'email.com'})
//         }else{
//             reject(console.log('eerro in promise'))
//         }
//     }, 2000);
// })

// async function consumepromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response);
    
//    } catch (error) {
//     console.log(error);
//    }
// }
// consumepromiseFive()


// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllusers()


// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response) =>{
//     return response.json()
// })
// .then((data) => console.log(data))
// .catch((e) => console.log(e))


