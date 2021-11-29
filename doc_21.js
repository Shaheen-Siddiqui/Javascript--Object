
comp=[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, 
        {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
// o/p {'S005', 'S002', 'S007', 'S001', 'S009'}
empaty=[];
for(i of comp){
        for(j in i){
                if(!empaty.includes(i[j])){
                        empaty.push(i[j])
                }
        }

}console.log(empaty);


        // empaty=new Set();
// for(i of comp){
//         for(j in i){
                
//          empaty.add(i[j])}

// }console.log(empaty);