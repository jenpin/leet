/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
    let list = stones.slice();
    while (list.length > 1) {
      const elim = destroy(findTheHeaviestTwo(list));
      elim.forEach(i=>{
        if (i.weight === 0)list.splice(i.index, 1);
        else list.splice(i.index, 1, i.weight);
        return list
      })
    console.log(list)
    }
  };

  function findTheHeaviestTwo(stoneList) {
    const sortedList = stoneList.slice();
    sortedList.sort();
    sortedList.reverse();
    console.log(sortedList[0],sortedList[1])
    return [{ index: stoneList.indexOf(sortedList[0]), weight: sortedList[0] },
      { index: stoneList.indexOf(sortedList[1]), weight: sortedList[1] }];
  }

  function destroy(heavyTwoList) {
    const one = heavyTwoList[0];
    const two = heavyTwoList[1];
    var final =[]
    if (one.weight === two.weight) {
        final = [{ ...one, weight: 0 }, { ...two, weight: 0 }];
    }
      if (one.weight > two.weight) {
        final = [{ ...one,weight: one.weight - two.weight }, { ...two, weight: 0 }];
      }else{
        final = [{ ...one,weight:0 }, { ...two,weight: two.weight - one.weight }];
      }
    return final
  }

  function destroyOne(heavyTwoList) {
    const one = heavyTwoList[0];
    const two = heavyTwoList[1];
    let final = [];
    heavyTwoList.map((a, b) => {
      if (a.weight === b.weight) {
        final = [{ ...a, weight: 0 }, { ...b, weight: 0 }];
      }
      if (a.weight > b.weight) {
        final = [{ ...a, weight: a - b }, { ...b, weight: 0 }];
      }
      final = [{ ...a, weight: 0 }, { ...b, weight: b - a }];
    });
    return final;
  }

 console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
