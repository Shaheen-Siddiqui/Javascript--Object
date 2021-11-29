
dic={1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
let count=0

console.log(`keys values count`);
for(const[key,value] of Object.entries(dic)){
  count=count+1
  
 console.log(`${key}     ${value}     ${count}`);
}

