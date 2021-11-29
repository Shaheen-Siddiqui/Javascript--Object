d1= {'key1': 1, 'key2': 3, 'key3': 2}
d2= {'key1': 1, 'key2': 2}
var fill = []
for(first in d1){
  for(sec in d2){
    if( first == sec &&  d1[first]== d2[sec] ){
      
      console.log(first,":",d1[first],".........Is Present In Both D1 and D2...");
    }
  }   
}