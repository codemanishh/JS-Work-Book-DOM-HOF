
// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let short=ages.sort()
console.log(short)
let maxx=ages[ages.length-1]
let minx=ages[0]
console.log("Max is"+"  "+maxx)
console.log("Min is"+"  "+minx)

// question 2  median

console.log(short.length)
if((short.length)%2==0){
    console.log( "even length")
    let avg=(short[short.length/2]+short[short.length/2+1])/2
    console.log("The average is",avg)
}
else
    {console.log("odd Length")
    let avg=short[short.length/2]
    console.log("The average is",avg)
}

// Question 3 ==> average
function summ(ages){
    let sum=0
    for(let i=0;i<ages.length;i++){
        sum=sum+ages[i]
    }
    return sum;
}
console.log(summ(ages))
let avgg=summ(ages)/ages.length
console.log("the average is"+"  "+avgg)


// the range of the ages(max minus min)
const range = maxx - minx;
console.log("The range is "+range)
// Compare the value of (min - average) and (max - average), use abs() method
 console.log("The compared values are",+" "+Math.abs(minx-avgg)+ " "+"and"+" "+Math.abs(maxx-avgg))