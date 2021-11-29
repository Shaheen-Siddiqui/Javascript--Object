
var mainString="My name is Shaheen, and my is  friend’s name is Dhanika"
var subString="is"
var spilited=mainString.split(" ")

count=0;
for( i in spilited ){
     if(spilited[i]===subString){
            count=count+1
        }
    }
console.log("there is",count);