/**
 * Definition for a binary tree node.
 * */
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

 // two arrays pre order & in order
 //preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// take 1st preorder element set it as TreeNode
//create two arrays rhs and lhs[9,3],[3,15,20,7]
// start with lhs,till i<=lhs.length->
// take the next element in the preorder,create Node
// split array based on lhs and rhs , if lhs.length===0 set LHS= null and RHS=would be preorder[i+1]
// and
//

var buildTree = function(preorder, inorder) {
   var root  = new TreeNode(preorder[0]);
   var splitLists = splitArray(preorder[0],inorder)
   root.left = splitLists[0]
   root.right = splitLists [1]
   var i = 1;
   while(i <= preorder.length){
      while(inorder.lenght!=0){
         var nextNode = new TreeNode(preorder[i])
         if( nextNode.val === TreeNode(preorder[i--])){
            console.log("hello")
         }
      }
      i=i+1
   }
};

function splitArray(nbr,nbrList){
   var tillNbr = nbrList.indexOf(nbr)
   var lhsList = nbrList.slice(0,tillNbr)
   var rhsList = nbrList.slice(tillNbr+1,nbrList.lenght)
   return [lhsList,rhsList]
}

buildTree([3,9,20,15,7],[9,3,15,20,7])


