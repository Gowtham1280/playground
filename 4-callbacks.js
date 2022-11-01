const add=(a,b,c)=>{
    setTimeout(()=>{
       console.log('waited for 2 seconds')
       const res=a+b;
       c(res) 
    },2000)
}

add(1,4,(sum)=>{
   console.log(sum);
})