a=[10,20,90,50,80,1000]
max=0;
sec=0;
third=0
i=0;
while(i<a.length){
     if(a[i]>max){
             third=sec;
             sec=max;
             max=a[i]}
     if(a[i]>sec && a[i]<max){
             sec=max;
             max=a[i]}
     if(a[i]>sec && a[i]<max) {
            third=a[i]
     }      
     
i++}console.log(max,sec,third);

























