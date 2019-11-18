
function findRoute(inputList){
    // [["SFO","ewr"],["SJC","LAX"]]
    var inputMap = translateToMap(inputList)
    var source = findSource(inputMap)
    var resultList = []
    resultList.push(source)
    createRoute(inputMap,source,resultList)
    return resultList
}

function translateToMap(inputList){
   var inputMap = new Map()
   inputList.map(row => {
       inputMap.set(row[0],row[1])
   })
  return inputMap
}

const findSource =inputMap =>{
 //return to me the source
 // inputkey[] value[]
 var inputKey = Array.from(inputMap.keys())
 var inputValues = Array.from(inputMap.values())
 return inputKey.filter(key => !inputValues.includes(key))[0]
}

const createRoute = (inputMap,source,resultList) =>{
   var keyLookUp = inputMap.get(source)
   console.log("##", keyLookUp,source,inputMap)
  while(keyLookUp){
    addToList(keyLookUp,inputMap.get(keyLookUp),resultList)
    console.log(keyLookUp,inputMap.get(keyLookUp))
    keyLookUp=inputMap.get(keyLookUp)
  }
}

const addToList = (source,destination,resultList) =>{
    resultList.push(source)
    return resultList
}

const inputList = [["a","b"],["c","d"],["e","c"],["b","f"],["d","a"]]

console.log(findRoute(inputList))