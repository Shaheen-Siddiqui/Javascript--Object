

dic={'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
// {'V': [4, 6, 10], 'VI': [4, 12], 'VII': [8]}
// o/p{'V': [], 'VI': [], 'VII': [2]}
dictonary={}
for(i of Object.keys(dic)){
        list=[]
        for(j of dic[i]){
                if(j%2==0){
                list.push(j)
                }dictonary[i]=list
        }
}//console.log(dictonary);

function name(params) {
        var a = require("readline-sync");
        var user= a.question("Enter any name")
        
        console.log(user,".......Hi");
        
}name()













