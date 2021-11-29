
// [{1: 'Jean Castro', 2: 'Lula Powell', 3: 'Brian Howell', 4: 'Lynne Foster', 5: 'Zachary Simon'}]


dic={1: ['Jean Castro'], 2: ['Lula Powell'], 3: ['Brian Howell'], 
4: ['Lynne Foster'], 5: ['Zachary Simon']}
empaty={}
for(i in dic){
for(j of dic[i]){
        empaty[i]=j
}
}console.log([empaty]);