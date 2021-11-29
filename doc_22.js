
a={'1':['a','b'], '2':['c','d']} 
// ac
// ad
// bc
// bd
val=Object.values(a)

for(i of val[0]){
        for(j of val[1]){
               if(j!=i){
                       j=i+j
               }console.log(j); 
        }

}