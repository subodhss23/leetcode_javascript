// Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].


function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

var rangeSumBST = function(root, low, high){
    
}


console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15));
console.log(rangeSumBST([10,5,15,3,7,13,18,1,null,6], 6, 10))