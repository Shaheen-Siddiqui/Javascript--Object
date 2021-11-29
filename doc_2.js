empaty={}

word='w3resource'
for(i of word){
    count=0
    for(j of word){
    
        if(i==j){
            count=count+1
        }empaty[i]=count
    }
}console.log(empaty);