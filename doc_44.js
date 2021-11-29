
[{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language': 84}, {'Science': 95, 'Language': 80}]
dic={'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
 a=Object.values(dic);
empaty={}
for(i of a[0]){

       for(j of a[1]){
       empaty['science']=i,empaty['Language']=j
       
       }console.log(empaty); 
}