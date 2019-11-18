function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  ​
  function makeList(vals) {
    let root = null
    if (vals.length > 0) {
      root = new ListNode(vals[0])
      let last = root
      for (let i = 1; i < vals.length; i++) {
        const node = new ListNode(vals[i])
        last.next = node
        last = node
      }
    }
    return root
  }
  ​
  function printList(head) {
    const nodes = []
    let cur = head
    while (cur !== null) {
      nodes.push(cur.val)
      cur = cur.next
    }
    console.log(nodes)
  }
  ​
  module.exports = {
    ListNode,
    makeList,
    printList,
  }