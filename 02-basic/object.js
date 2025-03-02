//singleton
//object litrals
const mysym =Symbol("kye1")
const jsuser ={
    name: "pradnya",
    "fullname":"pradnya kolap",
    [mysym]:"key1",
    age:26,
    useremail: "pkolap.@gmail.com",
locatin:"kolhapur",
isLoggedIn:false,
Lastloginday:["monday","saturday"]
}
// console.log(jsuser.useremail)
// console.log(jsuser["useremail"])
// console.log(jsuser["fullname"])
// console.log(jsuser[mysym])
jsuser.email = "pkamble@gmail.com"
//object.freese(jsuser)
jsuser.greeting=function(){
    console.log("hello js user");

}
jsuser.greetingtwo=function(){
    console.log(`hello js user, ${this.name}`);

}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());