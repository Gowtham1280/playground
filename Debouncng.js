const arr=[
    [1,2],
    [3,4,5],
    [6,7,8,9,10,[11,12,13],14,15],
    [16,17,18,19,20]
];
function doFlat(arr,depth=1){
    let res=[];
    arr.forEach(element => {
        if(Array.isArray(element)&&depth>0){
            res.push(...doFlat(element,depth-1));
        }else{
            res.push(element)
        }
    });
    return res;
}

// res=[1,2,3,4,5,6,7,8,9,10,]

console.log(doFlat(arr,2));

