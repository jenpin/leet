/**
 * @param {number[]} height
 * @return {number}
 */


var maxArea = function(height) {
    let i =0, j= height.length-1
    let currentmax=0,prevmax=0;
   while(i<j){
        let rightElement = height[i]
        let leftElement = height[j]
        currentmax = calculateArea(rightElement,leftElement, i+1,j+1)
        if(prevmax===0){
            prevmax = currentmax
        }else if(currentmax>prevmax){
            prevmax=currentmax
        }
        if(rightElement<leftElement){
            i=i+1
        }else{
            j=j-1
        }
    }
    return prevmax
};

function calculateArea(xHeight,yHeight, xIndex,yIndex){
    return Math.min(xHeight,yHeight) * (yIndex-xIndex)
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))