/*global Tree, console */
var tree = new Tree();

tree.addValue('d');
tree.addValue('f');
tree.addValue('a');
tree.addValue('c');
tree.addValue('e');
tree.addValue('b');

// Print add tree nodes values
tree.traverse();

// Checks values
console.log(tree.search('a')); // Node
console.log(tree.search('z')); // z
console.log(tree.search('c')); // Node