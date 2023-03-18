// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let Countries=
[ 'United States',  'China',  'Japan',  'Germany',  'United Kingdom',  'India',  'France',  'Italy',  'Ethiopia',  'Canada' ]
let a=0;
let count=0;
for ( let i =0 ;i<Countries.length;i++)
{
    if ( Countries[i]=="Ethiopia")
    {   a=i;
        continue;
    }
    if ( Countries[i]!="Ethiopia"){
        count=count+1;
    }
}
if(count!=0)
Countries.push("Ethiopia")

Countries[a]=Countries[a].toUpperCase()
console.log(Countries)