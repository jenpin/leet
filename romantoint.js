var romanToInt = function(s) {
 let result = 0
 let backCounter
 for(let c of s){
     if(backCounter){
          if(createMap[backCounter+c]){
              result= result+createMap[backCounter+c]
              backCounter=null
          }else{
            result= result+createMap[backCounter]
            backCounter=c;
          }
     }else{backCounter=c;}
 }
 if(backCounter){
    result= result+createMap[backCounter]
 }
 return result
};

var createMap ={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900,

}

const compare = (actual,expected) => actual === expected? 'PASS':'FAIL'
console.log(compare(romanToInt("MCMXCIV"),1994));
console.log(compare(romanToInt("LVIII"),58))