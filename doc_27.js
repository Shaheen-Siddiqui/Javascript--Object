
student =[{'id': 1, 'success':1, 'name': 'Lary'},
{'id': 2, 'success': 0, 'name': 'Rabi'},
{'id': 3, 'success': 1, 'name': 'Alex'}]

//  Sample output if key is id: then 6
var sum= 0
var sum1=0
for (i of student){
sum =sum+i['id']
sum1=sum1+i['success']

}

console.log("suess",sum1);
console.log("id",sum);