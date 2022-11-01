// 1. Call
const ob={
    fname:'chikilammetla',
    lname:'Gowtham',
}
function fun(otherargs){
    console.log(this.fname+" "+this.lname+" "+otherargs);
}
// console.log(fun.call(ob));

// 1. pollyfill for Call

Function.prototype.myCall=function(obj,...args){
    obj.keepingOurFnInthisObj=this;
    obj.keepingOurFnInthisObj(...args);
}
// fun.myCall(ob,"kumar");

// 2. pollyfill for Apply

Function.prototype.myApply=function(obj,args){
    obj.keepingOurFnInthisObj=this;
    obj.keepingOurFnInthisObj(...args);
}
// fun.myApply(ob,["kumar",24]);

// 3. pollyfill for Bind

Function.prototype.myBind=function(obj,...args){
    obj.ref=this;
    return function(...Newargs){
         obj.ref(...args,...Newargs);
    }
}


// const Bind_Returns_Function=fun.myBind(ob,'kajal');
// console.log(Bind_Returns_Function());

//=============================================================================================================

// 1. polyfil for map

const arr=[1,2,3,4,5];

// const newArr=arr.map((x)=>{
//     return (x*2);
// })
// console.log(newArr);

// Array.prototype.myMap=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i]));
//     }
//     return temp;
// }
// const newArr=arr.myMap((ar)=>{
//     return ar*2;
// })
// console.log(newArr);

// 2. polyfil for filter


// Array.prototype.myFilter=function(cb){
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i]))
//             temp.push(this[i]);
//     }
//     return temp;
// }

// const newArrr=arr.myFilter((x)=>{
//     if(x>2)
//     return x;
// })
// console.log(newArrr)

// 3. polyfil for reduce

Array.prototype.myReduce=function(cb,init){
    let accumulator=init;
    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i]):this[i];
    }
    return accumulator
}

const zx=arr.myReduce((acc,cur)=>{
    return acc+cur;
},0)
console.log(zx);