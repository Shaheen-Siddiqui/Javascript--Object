
dic=[{'id': '#FF0000', 'color': 'Red'},{'id': '#800000', 'color': 'Maroon'}, 
     {'id': '#FFFF00', 'color': 'Yellow'},{'id': '#808000', 'color': 'Olive'}]
// Remove id #FF0000 
// [{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
list=[]
for(i of dic){
   if(i['id']!='#FF0000')
   list.push(i)
}console.log(list);