
dic={'Cierra Vega': 175, 'Alden Cantrell': 180, 
'Kierra Gentry': 165,
'Pierre Cox': 190}
fill={}
for([key,value] of Object.entries(dic)){
if(value>170){
fill[key]=value
}
}console.log(fill);