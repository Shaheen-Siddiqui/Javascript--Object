
dic={1: 'red', 2: 'green', 3: 'black_and_white', 4: 'whites', 5: 'black'}
a=Object.values(dic)

empaty={}
for(i=0; i<a.length; i++){
        count=0;
        for(j=0; j<a[i].length; j++){
              count=count+1
              empaty[a[i]]=count
              
        }
}console.log(empaty);