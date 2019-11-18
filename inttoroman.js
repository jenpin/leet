var createMap ={
   1:'I',
   5:'V',
   10:'X',
    50:'L',
    100:'C',
    500:'D',
    1000:'M',
    4:'IV',
    9:'IX',
    40:'XL',
    90:'XC',
    400:'CD',
    900:'CM',
}

var lookUpMap = {
    1000: ['M','',''],
    100:['C','D','M'],
    10:['X','L','C'],
    1:['I','V','X']
}



/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = ''
    let power = 1000;
    while(power>=1){
       if(num>=power){
           var range = lookUpMap[power];
           var temp = Math.floor(num/power)
           if(temp>=5 && temp<9){
                result += range[1] + range[0].repeat(temp-5)
            }
            if(temp===9){
                result +=range[0]+range[2]
            }
            if(temp===4){
                result +=range[0]+range[1]
            }
            if(temp>=1 && temp<4){
                result += range[0].repeat(temp)
            }
            num=num-(temp*power)
       }
       console.log(power,result,num)
       power=power/10
    }
    return result;
};



const compare = (actual,expected) => actual === expected? 'PASS':'FAIL'
console.log(compare(intToRoman(884),'DCCCLXXXIV'));
console.log(compare(intToRoman(1),'I'));