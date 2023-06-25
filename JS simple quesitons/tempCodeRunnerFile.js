// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
let date=new Date()
let yy=date.getFullYear()
let mm=date.getMonth()
let dd=date.getDay()
let hh=date.getHours()
let min=date.getMinutes()


console.log(yy,"-",mm,"-",dd," ",hh,":",min)
console.log(dd,"-",mm,"-",yy," ",hh,":",min)
console.log(dd,"/",mm,"/",yy," ",hh,":",min)
