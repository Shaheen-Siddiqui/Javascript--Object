
dic={1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
// Convert the said dictionary into a list of lists:
// [[1, 'red'], [2, 'green'], [3, 'black'], [4, 'white'], [5, 'black']]
list=[]
for(i in dic){
        if(dic.hasOwnProperty(i)){
        list.push([i,dic[i]])
        }
}console.log(list);