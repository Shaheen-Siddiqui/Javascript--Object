
// C1 C2 C3                                                                                                      
// 1 5 9                                                                                                         
// 2 6 10                                                                                                        
// 3 7 11
// b=Object.keys(my_dict)

// for(i=0;i<a.length;i++){
//         console.log(a[i]);
        // for (j in a[i]){
        //         console.log(j);



        // }
// }



my_dict ={'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}        
a=Object.values(my_dict);
var b=a[0]
var c=a[1]
var d=a[2]

console.log("C1","C2",'C3');
for(i in a){
        console.log(b[i]  ,c[i],  d[i])
        
}