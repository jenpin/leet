//take a nbr convert it to an array
//Ignore the sign
//do a reverse
var reverse1 = (input) =>{

    var range = Math.pow(2,32)
    console.log(typeof range, typeof input, input<range)
    if(!(-range-1 <input< range)){
        return 0
    }
    var a = input.toString()
  var mid = [...a]
  if(a[0]==="-"){
      mid=a.slice(1)
  }
  var b = mid.reverse()
  if(a[0]==="-"){
    b=['-'].concat(b)
}
 var c= b.join().replace(/,/g,'')
  return c
}

console.log(reverse1(12345657376447349489))