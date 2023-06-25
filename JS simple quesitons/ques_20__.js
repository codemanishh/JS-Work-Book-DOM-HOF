// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart[0]!="meat")
    shoppingCart.unshift("meat")
if(shoppingCart[shoppingCart.length-1]!="sugar")
    shoppingCart.push("sugar")
  let a;
for ( let i=0;i<shoppingCart.length;i++)
  {
    if(shoppingCart[i]=="Honey")
      {
       a=i;
        continue;
  }}
  shoppingCart.splice(a,1)
  for ( let i=0;i<shoppingCart.length;i++)
  {
    if(shoppingCart[i]=="Tea")
      {
       shoppingCart[i]="Green Tea";
        continue;
  }}
console.log(shoppingCart)
