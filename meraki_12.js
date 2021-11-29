
var dict={'Alex': ['subj1', 'subj2', 'subj3'],
'kajin':['jnjxbbcj','jnnc','shscci'],
'David': ['subj1', 'subj2'],
'vella':['kak','tkla','sati']}


value=Object.values(dict)
count=0;
for(i of value){
console.log(i);
for(j of i){

count=count+1
}

}console.log("Total count",count);