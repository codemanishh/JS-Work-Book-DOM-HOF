// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
 
let month1= prompt("Enter the month :")
let month = month1.toLowerCase();
if (month=="september"|| month=="october"|| month=="november")
    console.log("Autumn")
else if(month=="december"||month=="january"||month=="february")
    console.log("Winter")
else if(month=="march"|| month=="april"||month=="may")
    console.log("Spring")
else if(month=="june"||month=="july"||month=="august")
    console.log("Summer")
else
    console.log("Invalid Entry")