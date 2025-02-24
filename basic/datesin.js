//****************************Date************************** */
let myDate =new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString);
//let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate);
//let myCreatedDate = new Date(2023,0,23,4,5,)
//let myCreatedDate = new Date(2023-01-14)
//let myCreatedDate = new Date(2023)

//onsole.log(myCreatedDate.toLocaleDateString());
// let myCreatedDate=new Date("2023-6-14")
// let Timestamp =Date.now()
// console.log(Timestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now/1000));
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
//'${newDate.getDate()}and the time'
newDate.toLocaleString('default',{
    weekday:"long"
    
    
})