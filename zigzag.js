/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    //split the string to a character array
    var stringArray=[...s]
    //check the numOfRows , numRows-2 ,will give the diagonal stars
    var diagonalNbr = numRows -2
    //construct array for indexrows
    var indexrows =[]
    var i =0;var b=0

    while(i<stringArray.length){
        if(b===numRows ){
            var c =1;
            while (c === diagonalNbr){
                indexrows.push(c)
                c=c+1

            }
            b=0
            i=i+diagonalNbr
        }
        if(b<numRows){
            indexrows.push(b)
            b=b+1
            i=i+1
        }
    }
    if(indexrows.length === stringArray.length) console.log("proceed")

   var outputJsonArray =[]
     for(var i =0;i<stringArray.length;i++){
        outputJsonArray.push({
            value: stringArray[i],
            index: indexrows[i]
        })
     }

    //collect all the numbers having the same index
    var result = []
    for(var i =0;i<numRows;i++){
        var resulta = outputJsonArray.filter(a =>a.index ===i)
        result.push(resulta.map(b=>b.value))
    }
    return [].concat.apply([], result).join('')

};

console.log(convert("PAYPALISHIRING",3))