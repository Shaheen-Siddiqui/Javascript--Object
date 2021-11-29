
 var myDict= { 1: 'NAVGURUKUL', 2: 'IN', 3:{'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } }

 //myDict= { 1: 'NAVGURUKUL', 2: 'IN',3: { 'B' : 'To', 'C' : 'DHARAMSALA' } }

a=myDict[3]

delete a.A
console.log(myDict);

