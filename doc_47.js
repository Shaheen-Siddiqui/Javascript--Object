
div={'C1': [10, 20, 30], 'C2': [20, 30, 40], 'C3': [12, 34]}
// Clear the list values in the said dictionary:
// {'C1': [], 'C2': [], 'C3': []}
fill={}
a=Object.keys(div)
for(i of a){
        fill[i]=[]
}console.log(fill)







