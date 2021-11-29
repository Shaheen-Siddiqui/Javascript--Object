var d1={'a':10, 'b':20}

var d2={'c':30,'b':40}

var d3={'d':50,'e':60}

for(key in d2){
    if(key in d1){
        d1[key]=d2[key]+d1[key]
    }
    else{
        d1[key]=d2[key]
        }
}

for(a in d3){
    if(!d1.hasOwnProperty(a)){
        d1[a]=d3[a]
    }
}
  
console.log(d1);
