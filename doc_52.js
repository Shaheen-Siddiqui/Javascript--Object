
fill={}
obj={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 10, 'i': 90}
a=Object.values(obj)
a.sort((a,b)=> a-b)
for(i of a){
        for(j in obj){
                if(i==obj[j]){
                fill[j]=obj[j]}
        }
}//console.log(fill);
p=Object.keys(fill)
console.log(p[8],":=first max");
