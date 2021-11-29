
list=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, 
{"five":"5"}, {"six":"9"}, {"seven":"7"} ]

empaty=[]
for(i of list){
    for(j in i){

        if(!empaty.includes(i[j])){
            empaty.push(i[j])
           
        }
    }
    }
    console.log(empaty);