main_dit={'x': [11, 12, 13, 14, 15, 16, 17, 18, 19],
          'y': [21, 22, 23, 24, 25, 26, 27, 28, 29],
          'z': [31, 32, 33, 34, 35, 36, 37, 38, 39]}

for(i in main_dit){
    console.log(main_dit[i][4]);}

    //............................................//
empaty=[]
for(i of main_dit['x']){
  empaty.push(i)
}console.log("X has Value",empaty);

empaty=[]
for(i of main_dit['y']){
  empaty.push(i)
}console.log("Y has Value",empaty);

empaty=[]
for(i of main_dit['z']){
  empaty.push(i)
}console.log("Z has Value",empaty);
    //.......................................................//


    
 
    main_dict={ 'x': [11, 12, 13, 14, 15, 16, 17, 18, 19],
    'y': [21, 22, 23, 24, 25, 26, 27, 28, 29],
    'z': [31, 32, 33, 34, 35, 36, 37, 38, 39]}
count=0
for( [key,value] of Object.entries(main_dict)){
count=count+1
console.log(`${key}   has value   [${value}]`);
}










