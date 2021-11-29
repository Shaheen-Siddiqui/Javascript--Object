
var word="MISSISSIPPI";
list={}
for(i of word){

    count=0;
    for(j of word){
if (i==j){
    count=count+1}

    list[i]=count}
    
}
console.log(list);