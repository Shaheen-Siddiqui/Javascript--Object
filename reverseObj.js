var myObj={e:'apple',c:'ball',a:'elephant',b:'cat'}
// val,key
dictonary={};
val=Object.values(myObj)
val.sort()
key=Object.keys(myObj)
key.sort()


for(i in key){

         dictonary[key[i]]=val[i]}
 // console.log(dictonary);
lis=[];
dic={};
for(i in dictonary){
        
        if(dictonary.hasOwnProperty(i)){
                lis.push({'keys':i,'values':dictonary[i] })}
        }
        for(a=lis.length-1; a>=0; a--){
        dic[lis[a].keys]=lis[a].values
        }
//console.log(dic);


//////////////////////////...............number...............//////////////////
dic={"z":30, "a":40, "j":20, "b":10};
// dic={a:'apple',b:'num',c:'ball'}
empaty={};
a=Object.values(dic)
a.sort()

for(i in a){
        for(j in dic){

                 if(a[i]==dic[j]){
                 empaty[j]=dic[j]

                 }
        }
}
//console.log(empaty);
//////////................................................////////////
fill={}
obj={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 100}
a=Object.values(obj)
a.sort((a,b)=> a-b)
for(i of a){
        for(j in obj){
                if(i==obj[j]){
                        fill[j]=i
                }
        }
}//console.log(fill);














