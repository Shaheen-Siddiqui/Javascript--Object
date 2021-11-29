
my_dict = {

    'data1':100,
    
    'data2': -54,
    
    'data3': 247
    
    } 
    
let a = Object.values(my_dict);
sum=0;
for(i of a){
    sum=sum+i
}
console.log(sum);